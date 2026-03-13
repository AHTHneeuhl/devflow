import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';
import { BillingController } from './billing.controller';
import { SubscriptionMiddleware } from './subscription.middleware';

@Module({
  providers: [StripeService],
  controllers: [BillingController],
  exports: [StripeService],
})
export class BillingModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SubscriptionMiddleware).forRoutes('*');
  }
}
