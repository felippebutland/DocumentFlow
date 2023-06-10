import { CreateLoggerUseCase } from '@modules/logger/useCases/createLogger';
import { HttpException, Injectable } from '@nestjs/common';
import { UserValidator } from '../../../validators/user.validator';
import { UserDTO } from '../../dto/user.dto';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userValidator: UserValidator,
    private readonly loggerUseCase: CreateLoggerUseCase,
  ) {}

  async execute(user: UserDTO): Promise<any> {
    const params = {
      ...user,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.userValidator.validateOnCreate(params);

    const userExists = await this.userRepository.getUser({
      emailAddress: user.emailAddress,
    });

    if (userExists) throw new HttpException('User already exists', 409);

    const userCreated = await this.userRepository.createUser(params);

    await this.loggerUseCase.execute({
      user: userCreated._id,
      action: 'create',
      ip: '127.0.0.1',
      newRecord: userCreated,
      created_at: new Date(),
    });
  }
}
