import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { ActivityLogsModule } from 'src/activity-logs/activity-logs.module';
import { RealtimeModule } from 'src/realtime/realtime.module';

import { AttachmentsController } from './attachments.controller';
import { AttachmentsService } from './attachments.service';

@Module({
  imports: [PrismaModule, ActivityLogsModule, RealtimeModule],
  providers: [AttachmentsService],
  controllers: [AttachmentsController],
})
export class AttachmentsModule {}
