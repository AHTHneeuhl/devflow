import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { MetricsController } from './metrics.controller';
import { ObservabilityController } from './observability.controller';
import { ObservabilityService } from './observability.service';

@Module({
  imports: [TerminusModule],
  controllers: [MetricsController, ObservabilityController],
  providers: [ObservabilityService],
})
export class ObservabilityModule {}
