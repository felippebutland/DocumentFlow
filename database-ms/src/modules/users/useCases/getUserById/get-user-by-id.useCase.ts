import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByIdUseCase {
  async execute() {
    return 'get user by id';
  }
}
