import { Module } from '@nestjs/common';
import { ActivityLogsService } from 'src/activity-logs/activity-logs.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RealtimeGateway } from 'src/realtime/realtime.gateway';
import { AttachmentsController } from './attachments.controller';
import { AttachmentsService } from './attachments.service';

@Module({
  providers: [
    AttachmentsService,
    PrismaService,
    RealtimeGateway,
    ActivityLogsService,
  ],
  controllers: [AttachmentsController],
})
export class AttachmentsModule {}
