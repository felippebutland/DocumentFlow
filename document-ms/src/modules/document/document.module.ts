import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DocumentController } from './controller/document.controller';
import { DocumentRepository } from './repository/document.repository';
import { CreateDocumentUseCase } from './useCases/createDocument/createDocument.useCase';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'any_name_i_want',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'any_client_id_i_want',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'any_client_id_i_want',
          },
          producer: {
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
  ],
  controllers: [DocumentController],
  providers: [CreateDocumentUseCase, DocumentRepository],
})
export class DocumentModule {}
