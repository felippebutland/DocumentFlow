import { UserRepository } from '@modules/users/repository/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string) {
    return this.userRepository.getUserById(id);
  }
}
