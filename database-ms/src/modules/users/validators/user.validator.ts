import JoiDate from '@joi/date';
import { HttpException } from '@nestjs/common';
import JoiBase, { Root } from 'joi';
import { UserDTO } from '../dto/user.dto';

export class UserValidator {
  validateOnCreate(user: UserDTO): void {
    const Joi = JoiBase.extend(JoiDate) as Root;
    const schema = Joi.object({
      name: Joi.string().required(),
      phoneNumber: Joi.string().required(),
      emailAddress: Joi.string().email().required(),
      notification: Joi.boolean().required(),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required(),
    });

    const { error } = schema.validate(user, {
      allowUnknown: true,
    });

    if (error?.details?.length) {
      const message = error.details[0].message.replace(/"/gi, '*');

      throw new HttpException(message, 409);
    }
  }
}
