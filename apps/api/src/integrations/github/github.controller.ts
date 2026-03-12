import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { GithubService } from './github.service';
import type { GithubWebhookPayload } from './github.types';

@Controller('integrations/github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('connect')
  connectGithub() {
    return this.githubService.getGithubOAuthUrl();
  }

  @Post('webhook')
  handleWebhook(@Body() payload: GithubWebhookPayload) {
    return this.githubService.handleWebhook(payload);
  }

  @Get('status')
  getGithubIntegration(@Req() req: { user: { id: string } }) {
    return this.githubService.getGithubIntegration(req.user.id);
  }
}
