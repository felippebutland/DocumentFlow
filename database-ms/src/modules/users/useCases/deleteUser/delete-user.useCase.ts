import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserUseCase {
  async execute() {
    return 'delete user';
  }
}
