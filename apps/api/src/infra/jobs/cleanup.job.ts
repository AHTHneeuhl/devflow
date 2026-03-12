import { Cron, CronExpression } from '@nestjs/schedule';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CleanupJob {
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  handle() {
    console.log('Running daily cleanup job');
  }
}
