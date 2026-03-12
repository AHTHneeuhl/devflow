import { Controller, Get, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Get('projects/:projectId/metrics')
  getProjectMetrics(@Param('projectId') projectId: string) {
    return this.analyticsService.getProjectMetrics(projectId);
  }
}
