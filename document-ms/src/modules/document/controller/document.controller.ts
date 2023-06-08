import { Controller, Post } from '@nestjs/common';
import { CreateDocumentUseCase } from '../useCases/createDocument/createDocument.useCase';

@Controller('documents')
export class DocumentController {
  constructor(private readonly createDocumentUseCase: CreateDocumentUseCase) {}

  @Post()
  async createDocument() {
    return await this.createDocumentUseCase.execute('1', 'document');
  }
}
