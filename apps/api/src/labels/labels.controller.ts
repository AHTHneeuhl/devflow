import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LabelsService } from './labels.service';
import { CreateLabelDto } from './dto/create-label.dto';

@Controller('projects/:projectId/labels')
export class LabelsController {
  constructor(private labelsService: LabelsService) {}

  @Post()
  create(@Param('projectId') projectId: string, @Body() dto: CreateLabelDto) {
    return this.labelsService.createLabel(projectId, dto);
  }

  @Get()
  getProjectLabels(@Param('projectId') projectId: string) {
    return this.labelsService.getProjectLabels(projectId);
  }
}
