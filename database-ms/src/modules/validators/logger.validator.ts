import { LoggerDTO } from '@modules/logger/dto/logger.dto';
import { HttpException } from '@nestjs/common';
import { z } from 'zod';

export class LoggerValidator {
  validateOnCreate(logger: LoggerDTO): void {
    const schema = z.object({
      userId: z.string(),
      action: z.string(),
      created_at: z.date(),
    });

    try {
      schema.parse(logger);
    } catch (err) {
      throw new HttpException(err.issues[0].message, 406);
    }
  }
}
