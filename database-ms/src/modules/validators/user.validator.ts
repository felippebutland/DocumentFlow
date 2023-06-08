import { HttpException, HttpStatus } from '@nestjs/common';
import { z } from 'zod';
import { UserDTO } from '../users/dto/user.dto';

export class UserValidator {
  validateOnCreate(user: UserDTO): void {
    const schema = z.object({
      name: z.string(),
      phoneNumber: z.string(),
      emailAddress: z.string().email(),
      notification: z.boolean(),
      active: z.boolean(),
      created_at: z.date(),
      updated_at: z.date(),
    });

    try {
      schema.parse(user);
    } catch (err) {
      throw new HttpException(
        err.issues[0].message,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
