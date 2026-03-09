import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityLogsService {
  constructor(private prisma: PrismaService) {}

  async logActivity(
    userId: string,
    action: string,
    entity: string,
    entityId: string,
  ) {
    return this.prisma.activityLog.create({
      data: {
        userId,
        action,
        entity,
        entityId,
      },
    });
  }
}
