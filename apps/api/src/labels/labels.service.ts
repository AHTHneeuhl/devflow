import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLabelDto } from './dto/create-label.dto';

@Injectable()
export class LabelsService {
  constructor(private prisma: PrismaService) {}

  async createLabel(projectId: string, dto: CreateLabelDto) {
    return this.prisma.label.create({
      data: {
        name: dto.name,
        projectId,
      },
    });
  }

  async getProjectLabels(projectId: string) {
    return this.prisma.label.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}
