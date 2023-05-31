import { HttpException, Injectable } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: UserDTO) {
    const params = {
      ...user,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const userExists = await this.userRepository.getUser({
      emailAddress: user.emailAddress,
    });

    if (userExists) throw new HttpException('User already exists', 409);

    await this.userRepository.createUser(params);
  }
}
