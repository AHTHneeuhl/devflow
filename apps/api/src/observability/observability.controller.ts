import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { register } from 'prom-client';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller('metrics')
export class ObservabilityController {
  constructor(private health: HealthCheckService) {}

  @Get('health')
  @HealthCheck()
  check() {
    return this.health.check([]);
  }

  @Get()
  async metrics(@Res() res: Response) {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  }
}
