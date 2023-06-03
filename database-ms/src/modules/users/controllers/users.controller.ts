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

    console.log(userCreated);
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

  @Get('/:id')
  getUser(@Query('id') id: string) {
    return this.getUserByIdUseCase.execute(id);
  }

  @Patch('/:id')
  updateUser(@Body() user: Partial<UserDTO>, @Query('id') id: string) {
    return this.updateUserUseCase.execute(user, id);
  }

  @Delete('/:id')
  deleteUser(@Query('id') id: string) {
    return this.deleteUserUseCase.execute(id);
  }
}
