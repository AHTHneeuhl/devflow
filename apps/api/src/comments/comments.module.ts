import { Module } from '@nestjs/common';
import { ActivityLogsModule } from 'src/activity-logs/activity-logs.module';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RealtimeModule } from 'src/realtime/realtime.module';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    PrismaModule,
    ActivityLogsModule,
    NotificationsModule,
    RealtimeModule,
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
