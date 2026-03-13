import { Module } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';

@Module({
  providers: [StripeService],
})
export class BillingModule {}
