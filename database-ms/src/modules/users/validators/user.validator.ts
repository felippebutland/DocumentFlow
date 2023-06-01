import { HttpException } from '@nestjs/common';
import { z } from 'zod';
import { UserDTO } from '../dto/user.dto';

export class UserValidator {
  validateOnCreate(user: UserDTO): void {
    const schema = z.object({
      name: z.string(),
      phoneNumber: z.string(),
      emailAddress: z.string().email(),
      notification: z.boolean(),
      created_at: z.date(),
      updated_at: z.date(),
    });

    try {
      schema.parse(user);
    } catch (err) {
      throw new HttpException(err.issues[0].message, 409);
    }
  }
}
