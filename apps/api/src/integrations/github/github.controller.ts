import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('integrations/github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('connect')
  connectGithub() {
    return this.githubService.getGithubOAuthUrl();
  }
}
