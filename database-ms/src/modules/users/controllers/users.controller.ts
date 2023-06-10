import { CreateUserUseCase } from '@modules/users/useCases/createUser/create-user.useCase';

import { MessagePattern, Payload } from '@nestjs/microservices';
import { DeleteUserUseCase } from '../useCases/deleteUser/delete-user.useCase';
import { GetUserUseCase } from '../useCases/getUser/get-user.useCase';
import { GetUserByIdUseCase } from '../useCases/getUserById/get-user-by-id.useCase';
import { UpdateUserUseCase } from '../useCases/updateUser/update.useCase';

export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
  ) {}

  @MessagePattern('medium.rocks')
  readMessage(@Payload() message: any) {
    const context = message.context;
    switch (context) {
      case 'getUserById':
        return this.getUserByIdUseCase.execute(message.id);
      case 'patchUser':
        return this.updateUserUseCase.execute(message.user, message.id);
      case 'deleteUser':
        return this.deleteUserUseCase.execute(message.id);
      case 'getAllUsers':
        return this.getUserUseCase.execute();
      case 'createUser':
        return this.createUserUseCase.execute(message.user);
      default:
        break;
    }
  }
}
