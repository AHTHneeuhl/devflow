import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('tasks/:taskId/comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  create(@Param('taskId') taskId: string, @Body() dto: CreateCommentDto) {
    const userId = 'USER_ID'; // replace later with auth user
    return this.commentsService.createComment(taskId, userId, dto);
  }
}
