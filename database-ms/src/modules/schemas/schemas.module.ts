import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerSchema } from './logger.schema';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: [UserSchema, LoggerSchema] },
    ]),
  ],
})
export class SchemasModule {}
