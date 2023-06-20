import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SendEmail } from 'src/modules/domain/sendEmail.domain';
import { SendEmailUseCase } from '../useCases/sendEmail/send-email.useCases';

@Controller('/email')
export class EmailController {
  constructor(private readonly SendEmailUseCase: SendEmailUseCase) {}

  @HttpCode(204)
  @Post()
  async sendEmail(@Body() params: SendEmail): Promise<void> {
    await this.SendEmailUseCase.handle(params);
  }
}
