import { LoggerRepository } from '@modules/logger/repository/logger.repository';
import { CreateLoggerUseCase } from '@modules/logger/useCases/createLogger';
import { LoggerSchema } from '@modules/schemas/logger.schema';
import { UserSchema } from '@modules/schemas/user.schema';
import { UserValidator } from '@modules/validators/user.validator';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './controllers/users.controller';
import { UserRepository } from './repository/user.repository';
import { CreateUserUseCase } from './useCases/createUser/create-user.useCase';
import { DeleteUserUseCase } from './useCases/deleteUser/delete-user.useCase';
import { GetUserUseCase } from './useCases/getUser/get-user.useCase';
import { GetUserByIdUseCase } from './useCases/getUserById/get-user-by-id.useCase';
import { UpdateUserUseCase } from './useCases/updateUser/update.useCase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Logger', schema: LoggerSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    GetUserByIdUseCase,
    GetUserUseCase,
    CreateUserUseCase,
    DeleteUserUseCase,
    UpdateUserUseCase,
    CreateLoggerUseCase,
    UserValidator,
    UserRepository,
    LoggerRepository,
  ],
})
export class UsersModule {}
