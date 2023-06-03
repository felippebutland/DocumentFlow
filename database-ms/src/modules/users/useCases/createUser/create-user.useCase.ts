import { HttpException, Injectable } from '@nestjs/common';
import { UserValidator } from '../../../validators/user.validator';
import { UserDTO } from '../../dto/user.dto';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userValidator: UserValidator,
  ) {}

  async execute(user: UserDTO): Promise<any> {
    const params = {
      ...user,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.userValidator.validateOnCreate(params);

    const userExists = await this.userRepository.getUser({
      emailAddress: user.emailAddress,
    });

    if (userExists) throw new HttpException('User already exists', 409);

    return this.userRepository.createUser(params);
  }
}
