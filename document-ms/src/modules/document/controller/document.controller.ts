import { Body, Controller, Post } from '@nestjs/common';
import { CreateDocumentUseCase } from '../useCases/createDocument/createDocument.useCase';

type Document = {
  document: string;
  userId: string;
};

@Controller('documents')
export class DocumentController {
  constructor(private readonly createDocumentUseCase: CreateDocumentUseCase) {}

  @Post()
  async createDocument(@Body() params: Document) {
    return this.createDocumentUseCase.execute(params.userId, params.document);
  }
}
