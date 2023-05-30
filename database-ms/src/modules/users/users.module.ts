import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    // GetUserByIdUseCase,
    // GetUserUseCase,
    // CreateDocumentsUseCase,
    // DeleteUserUseCase,
    // UpdateUserUseCase,
  ],
})
export class UsersModule {}
