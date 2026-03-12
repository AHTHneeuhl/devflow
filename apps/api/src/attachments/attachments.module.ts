import { Module } from '@nestjs/common';
import { AttachmentsService } from './attachments.service';
import { AttachmentsController } from './attachments.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RealtimeGateway } from 'src/realtime/realtime.gateway';

@Module({
  providers: [AttachmentsService, PrismaService, RealtimeGateway],
  controllers: [AttachmentsController],
})
export class AttachmentsModule {}
