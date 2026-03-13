import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

interface AuthRequest extends Request {
  user?: {
    organizationId?: string;
  };
}

@Injectable()
export class SubscriptionMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: AuthRequest, _res: Response, next: NextFunction) {
    const orgId = req.user?.organizationId;

    const sub = await this.prisma.subscription.findUnique({
      where: { organizationId: orgId },
    });

    (req as AuthRequest & { subscription?: typeof sub }).subscription = sub;

    if (!sub || sub.status !== 'active') {
      throw new ForbiddenException('Active subscription required');
    }

    next();
  }
}
