import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserUseCase {
  async execute() {
    return 'get user';
  }
}
