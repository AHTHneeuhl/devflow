import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';

@Module({
  providers: [GithubService, PrismaService],
  controllers: [GithubController],
})
export class IntegrationsModule {}
