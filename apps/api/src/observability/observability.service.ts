import { Injectable } from '@nestjs/common';
import { collectDefaultMetrics, Counter, Histogram } from 'prom-client';

@Injectable()
export class ObservabilityService {
  httpRequests = new Counter({
    name: 'http_requests_total',
    help: 'Total HTTP requests',
  });

  httpRequestDuration = new Histogram({
    name: 'http_request_duration_ms',
    help: 'HTTP request duration in ms',
    buckets: [50, 100, 200, 500, 1000],
  });

  constructor() {
    collectDefaultMetrics();
  }
}
