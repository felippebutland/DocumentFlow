import { UserRepository } from '@modules/users/repository/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    return this.userRepository.getUser();
  }
}
