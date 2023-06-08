import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import dotenv from 'dotenv';
import { AppModule } from './app.module';

export const createNestServer = async () => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:29092'],
        },
      },
    },
  );
  dotenv.config();
  return app.init();
};
