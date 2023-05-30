import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import dotenv from 'dotenv';
import express from 'express';
import { AppModule } from './app.module';

export const createNestServer = async () => {
  const expressInstance = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  dotenv.config();
  app.get(HttpAdapterHost);
  app.useGlobalFilters();

  app.enableCors();
  return app.init();
};
