import { UserSchema } from '@modules/schemas/user.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';
import { UserRepository } from './repository/user.repository';
import { CreateUserUseCase } from './useCases/createUser/create-user.useCase';
import { DeleteUserUseCase } from './useCases/deleteUser/delete-user.useCase';
import { GetUserUseCase } from './useCases/getUser/get-user.useCase';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [
    // GetUserByIdUseCase,
    GetUserUseCase,
    CreateUserUseCase,
    DeleteUserUseCase,
    // UpdateUserUseCase,
    UserRepository,
  ],
})
export class UsersModule {}
