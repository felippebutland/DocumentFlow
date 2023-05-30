import { Injectable } from '@nestjs/common';

@Injectable()
export class GetDocumentsUseCase {
  async execute() {
    return 'get documents';
  }
}
