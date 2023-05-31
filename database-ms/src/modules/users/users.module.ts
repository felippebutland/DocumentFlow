import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import UserRepository from './repository/user.repository';
import { CreateUserUseCase } from './useCases/createUser/create-user.useCase';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    // GetUserByIdUseCase,
    // GetUserUseCase,
    CreateUserUseCase,
    // DeleteUserUseCase,
    // UpdateUserUseCase,
    UserRepository,
  ],
})
export class UsersModule {}
