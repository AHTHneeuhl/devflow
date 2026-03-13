import { Module } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';
import { BillingController } from './billing.controller';

@Module({
  providers: [StripeService],
  exports: [StripeService],
  controllers: [BillingController],
})
export class BillingModule {}
