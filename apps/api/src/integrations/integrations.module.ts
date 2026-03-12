import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';

import { RealtimeGateway } from 'src/realtime/realtime.gateway';
import { SlackController } from './slack/slack.controller';
import { SlackService } from './slack/slack.service';

@Module({
  imports: [PrismaModule, RealtimeGateway],
  controllers: [GithubController, SlackController],
  providers: [GithubService, SlackService],
})
export class IntegrationsModule {}
