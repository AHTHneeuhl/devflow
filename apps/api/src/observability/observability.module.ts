import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { ObservabilityController } from './observability.controller';
import { ObservabilityService } from './observability.service';

@Module({
  controllers: [MetricsController, ObservabilityController],
  providers: [ObservabilityService],
})
export class ObservabilityModule {}
