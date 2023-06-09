import { Injectable } from '@nestjs/common';
import { DocumentRepository } from '../../repository/document.repository';

@Injectable()
export class CreateDocumentUseCase {
  constructor(
    private readonly documentRepository: DocumentRepository, // @Inject('any_name_i_want') private readonly client: ClientKafka,
  ) {}

  // async onModuleInit() {
  //   ['medium.rocks'].forEach((key) =>
  //     this.client.subscribeToResponseOf(`${key}`),
  //   );
  //   await this.client.connect();
  // }

  // async onModuleDestroy() {
  //   await this.client.close();
  // }

  async execute(userId: string, document: any): Promise<any> {
    return this.documentRepository.createDocument(userId, document);
  }
}
