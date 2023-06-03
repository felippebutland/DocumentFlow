import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentModule } from './modules/documents/documents.module';
import { LoggerModule } from './modules/logger/logger.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017'),
    ClientsModule.register([
      {
        name: 'DOCUMENT_SERVICE',
        options: {
          client: {
            clientId: 'DOCUMENT_SERVICE',
            brokers: ['localhost:9092'],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: 'DOCUMENT_SERVICE',
          },
        },
      },
    ]),
    DocumentModule,
    UsersModule,
    LoggerModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
