import { Injectable } from '@nestjs/common';

@Injectable()
export class AttachmentsService {
  async uploadAttachment(taskId: string, file: Express.Multer.File) {
    return {
      taskId,
      fileName: file.originalname,
      size: file.size,
    };
  }
}
