import { Module } from '@nestjs/common';
import { DocumentController } from './controllers/documents.controller';
import { CreateDocumentsUseCase } from './useCases/createDocuments/create-documents.useCase';
import { GetDocumentsUseCase } from './useCases/getDocuments/get-documents.useCase';

@Module({
  imports: [],
  controllers: [DocumentController],
  providers: [GetDocumentsUseCase, CreateDocumentsUseCase],
})
export class DocumentModule {}
