import { Module } from '@nestjs/common';
import { DocumentModule } from './modules/document/document.module';

@Module({
  imports: [DocumentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
