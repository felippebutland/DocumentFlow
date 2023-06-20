import { Module } from '@nestjs/common';
import { EmailController } from './controller/email.controller';
import { SendEmailUseCase } from './useCases/sendEmail/send-email.useCases';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [SendEmailUseCase],
})
export class EmailModule {}
