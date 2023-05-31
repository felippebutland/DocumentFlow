import { CreateUserUseCase } from '@modules/users/useCases/createUser/create-user.useCase';
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {} // private readonly getUserByIdUseCase: GetUserByIdUseCase, // private readonly deleteUserUseCase: DeleteUserUseCase, // private readonly updateUserUseCase: UpdateUserUseCase, // private readonly getUserUseCase: GetUserUseCase, // private readonly createUserUseCase: CreateUserUseCase,

  @Post()
  createUser() {
    return this.createUserUseCase.execute();
  }

  @Get('/')
  getHome() {
    return 'this.getUserUseCase.execute()';
  }

  @Get('/:id')
  getUser() {
    return 'this.getUserByIdUseCase.execute()';
  }

  @Patch('/:id')
  updateUser() {
    return 'this.updateUserUseCase.execute()';
  }

  @Delete('/:id')
  deleteUser() {
    return 'this.deleteUserUseCase.execute()';
  }
}
