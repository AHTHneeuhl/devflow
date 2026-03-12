import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RealtimeModule } from 'src/realtime/realtime.module';

import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';

import { SlackController } from './slack/slack.controller';
import { SlackService } from './slack/slack.service';

@Module({
  imports: [PrismaModule, RealtimeModule],
  controllers: [GithubController, SlackController],
  providers: [GithubService, SlackService],
})
export class IntegrationsModule {}
