import { Injectable } from '@nestjs/common';
import UserRepository from '../../repository/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.createUser();
  }
}
