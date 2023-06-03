import { UserDTO } from '@modules/users/dto/user.dto';
import { UserRepository } from '@modules/users/repository/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(user: Partial<UserDTO>, id: string) {
    return this.userRepository.updateUser(user, id);
  }
}
