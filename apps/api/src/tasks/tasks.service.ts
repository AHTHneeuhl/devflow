import { Injectable } from '@nestjs/common';
import { ActivityLogsService } from 'src/activity-logs/activity-logs.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    private prisma: PrismaService,
    private activityLogsService: ActivityLogsService,
    private notificationsService: NotificationsService,
  ) {}

  async create(projectId: string, userId: string, dto: CreateTaskDto) {
    const task = await this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: dto.status,
        priority: dto.priority,
        projectId,
      },
      include: {
        assignee: true,
      },
    });

    await this.activityLogsService.logActivity(
      userId,
      'TASK_CREATED',
      'task',
      task.id,
      task.projectId,
    );

    return task;
  }

  async findAll(projectId: string) {
    return this.prisma.task.findMany({
      where: {
        projectId,
        deletedAt: null,
      },
      include: {
        assignee: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(taskId: string, userId: string, dto: UpdateTaskDto) {
    const task = await this.prisma.task.update({
      where: { id: taskId },
      data: dto,
      include: {
        assignee: true,
      },
    });

    await this.activityLogsService.logActivity(
      userId,
      'TASK_UPDATED',
      'task',
      task.id,
      task.projectId,
    );

    return task;
  }

  async delete(taskId: string, userId: string) {
    const task = await this.prisma.task.delete({
      where: { id: taskId },
    });

    await this.activityLogsService.logActivity(
      userId,
      'TASK_DELETED',
      'task',
      task.id,
      task.projectId,
    );

    return task;
  }

  async assignTask(taskId: string, assigneeId: string, userId: string) {
    const task = await this.prisma.task.update({
      where: { id: taskId },
      data: {
        assigneeId,
      },
      include: {
        assignee: true,
      },
    });

    if (assigneeId) {
      await this.notificationsService.createNotification(
        assigneeId,
        'Task Assigned',
        `You were assigned to task: ${task.title}`,
      );
    }

    await this.activityLogsService.logActivity(
      userId,
      'TASK_ASSIGNED',
      'task',
      task.id,
      task.projectId,
    );

    return task;
  }

  async unassignTask(taskId: string, userId: string) {
    const task = await this.prisma.task.update({
      where: { id: taskId },
      data: {
        assigneeId: null,
      },
    });

    await this.activityLogsService.logActivity(
      userId,
      'TASK_UNASSIGNED',
      'task',
      task.id,
      task.projectId,
    );

    return task;
  }

  async addLabel(taskId: string, labelId: string) {
    return this.prisma.task.update({
      where: { id: taskId },
      data: {
        labels: {
          connect: { id: labelId },
        },
      },
      include: {
        labels: true,
      },
    });
  }

  async getTasks(projectId: string, labelId?: string) {
    return this.prisma.task.findMany({
      where: {
        projectId,
        deletedAt: null,
        ...(labelId && {
          labels: {
            some: { id: labelId },
          },
        }),
      },
      include: {
        assignee: true,
        labels: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
