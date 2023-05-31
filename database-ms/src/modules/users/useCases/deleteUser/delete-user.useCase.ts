import { UserRepository } from '@modules/users/repository/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string) {
    await this.userRepository.inactiveUser(id);
  }
}
