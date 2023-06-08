import { CreateLoggerUseCase } from '@modules/logger/useCases/createLogger';
import { CreateUserUseCase } from '@modules/users/useCases/createUser/create-user.useCase';
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { UserDTO } from '../dto/user.dto';
import { DeleteUserUseCase } from '../useCases/deleteUser/delete-user.useCase';
import { GetUserUseCase } from '../useCases/getUser/get-user.useCase';
import { GetUserByIdUseCase } from '../useCases/getUserById/get-user-by-id.useCase';
import { UpdateUserUseCase } from '../useCases/updateUser/update.useCase';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly loggerUseCase: CreateLoggerUseCase,
  ) {}

  @Post()
  async createUser(@Body() user: UserDTO) {
    const userCreated = await this.createUserUseCase.execute(user);

    await this.loggerUseCase.execute({
      user: userCreated._id,
      action: 'create',
      ip: '127.0.0.1',
      newRecord: userCreated,
      created_at: new Date(),
    });
  }

  @Get('/')
  getHome() {
    return this.getUserUseCase.execute();
  }

  @MessagePattern('medium.rocks')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    console.log('message', message);
    const originalMessage = context.getMessage();
    const response =
      `Receiving a new message from topic: medium.rocks: ` +
      JSON.stringify(originalMessage.value);
    console.log(response);
    return response;
  }
  // @Get('kafka-test')
  // async getUserById(@Query('id') id: string) {
  //   return this.client.emit('medium.rocks', { foo: 'bar' });
  //   // return this.getUserUseCase.execute();
  // }

  @Patch('/:id')
  updateUser(@Body() user: Partial<UserDTO>, @Query('id') id: string) {
    return this.updateUserUseCase.execute(user, id);
  }

  @Delete('/:id')
  deleteUser(@Query('id') id: string) {
    return this.deleteUserUseCase.execute(id);
  }
}
