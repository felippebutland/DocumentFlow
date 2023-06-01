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

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  @Post()
  async createUser(@Body() user: UserDTO) {
    await this.createUserUseCase.execute(user);
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
  updateUser() {
    return 'this.updateUserUseCase.execute()';
  }

  @Delete('/:id')
  deleteUser(@Query('id') id: string) {
    return this.deleteUserUseCase.execute(id);
  }
}
