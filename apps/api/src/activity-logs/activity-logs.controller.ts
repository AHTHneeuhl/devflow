import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ActivityLogsService } from './activity-logs.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { OrgAccessGuard } from '../common/guards/org-access.guard';

@Controller('org/:orgId/projects/:projectId/activity')
export class ActivityLogsController {
  constructor(private activityLogsService: ActivityLogsService) {}

  @UseGuards(JwtAuthGuard, OrgAccessGuard)
  @Get()
  getProjectActivity(@Param('projectId') projectId: string) {
    return this.activityLogsService.getProjectActivity(projectId);
  }
}
