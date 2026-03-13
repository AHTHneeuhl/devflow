import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly stripe: StripeService) {}

  @Post('checkout')
  async checkout(@Body() body: { customerId: string; priceId: string }) {
    return this.stripe.createCheckoutSession(body.customerId, body.priceId);
  }
}
