import { Module } from '@nestjs/common';
import { ActivityLogsModule } from 'src/activity-logs/activity-logs.module';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RealtimeModule } from 'src/realtime/realtime.module';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    PrismaModule,
    ActivityLogsModule,
    NotificationsModule,
    RealtimeModule,
  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
