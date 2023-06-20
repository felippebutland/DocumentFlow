import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { SendEmail } from 'src/modules/domain/sendEmail.domain';

@Injectable()
export class SendEmailUseCase {
  async handle(params: SendEmail): Promise<void> {
    const resend = new Resend(process.env.RESEND_AUTH);

    if (process.env.SEND_EMAIL === 'true') {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: params.emailTo,
        subject: params.subject,
        html: `<p>Você tem um novo arquivo do usuário ${params.userName} para visualizar</p></br><p>Para visualizar acesse google.com</p>`,
      });
    }
  }
}
