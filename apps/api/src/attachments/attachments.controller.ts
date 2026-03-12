import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AttachmentsService } from './attachments.service';
import { diskStorage } from 'multer';

@Controller('attachments')
export class AttachmentsController {
  constructor(private readonly attachmentsService: AttachmentsService) {}

  @Post('tasks/:taskId')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}-${file.originalname}`;
          cb(null, uniqueName);
        },
      }),
    }),
  )
  uploadAttachment(
    @Param('taskId') taskId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.attachmentsService.uploadAttachment(taskId, file);
  }

  @Get('tasks/:taskId')
  getTaskAttachments(@Param('taskId') taskId: string) {
    return this.attachmentsService.getTaskAttachments(taskId);
  }

  @Delete(':id')
  deleteAttachment(@Param('id') id: string) {
    return this.attachmentsService.deleteAttachment(id);
  }
}
