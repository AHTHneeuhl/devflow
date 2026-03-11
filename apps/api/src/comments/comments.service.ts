import { Injectable } from '@nestjs/common';
import { ActivityLogsService } from 'src/activity-logs/activity-logs.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { RealtimeGateway } from 'src/realtime/realtime.gateway';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    private prisma: PrismaService,
    private activityLogsService: ActivityLogsService,
    private notificationsService: NotificationsService,
    private realtimeGateway: RealtimeGateway,
  ) {}

  async createComment(taskId: string, userId: string, dto: CreateCommentDto) {
    const comment = await this.prisma.comment.create({
      data: {
        content: dto.content,
        taskId,
        userId,
      },
      include: {
        user: true,
        task: true,
      },
    });

    await this.activityLogsService.logActivity(
      userId,
      'COMMENT_CREATED',
      'comment',
      comment.id,
      comment.task.projectId,
    );

    // 🔔 Notify task assignee
    if (comment.task.assigneeId && comment.task.assigneeId !== userId) {
      await this.notificationsService.createNotification(
        comment.task.assigneeId,
        'New Comment',
        `${comment.user.name || comment.user.email} commented on task "${comment.task.title}"`,
      );
    }

    this.realtimeGateway.emit('comment.created', comment);

    return comment;
  }

  async getTaskComments(taskId: string) {
    return this.prisma.comment.findMany({
      where: {
        taskId,
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        user: true,
      },
    });
  }

  async deleteComment(commentId: string) {
    return this.prisma.comment.update({
      where: { id: commentId },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
