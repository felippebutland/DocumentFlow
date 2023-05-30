import { Controller, Get, Post } from '@nestjs/common';
import { CreateDocumentsUseCase } from '../useCases/createDocuments/create-documents.useCase';
import { GetDocumentsUseCase } from '../useCases/getDocuments/get-documents.useCase';

@Controller('documents')
export class DocumentController {
  constructor(
    private readonly getDocumentsUseCase: GetDocumentsUseCase,
    private readonly createDocumentUseCase: CreateDocumentsUseCase,
  ) {}

  @Post()
  createDocument() {
    return this.createDocumentUseCase.execute();
  }

  @Get('/')
  getHome() {
    return this.getDocumentsUseCase.execute();
  }
}
