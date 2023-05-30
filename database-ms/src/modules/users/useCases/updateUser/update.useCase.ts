import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserUseCase {
  async execute() {
    return 'update user';
  }
}
