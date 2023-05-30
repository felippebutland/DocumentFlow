import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateDocumentsUseCase {
  async execute() {
    return 'get documents';
  }
}
