import { User } from '@modules/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from '../dto/user.dto';

export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(user: UserDTO): Promise<any> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async getUser(params?: Partial<UserDTO>): Promise<UserDTO[] | undefined> {
    const query = { ...params, active: true };
    return this.userModel.find(query).exec();
  }

  async inactiveUser(id: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(id, { active: false }).exec();
  }

  async getUserById(id: string): Promise<UserDTO | undefined> {
    return this.userModel.findById(id).exec();
  }

  async updateUser(user: Partial<UserDTO>, id: string): Promise<void> {
    await this.userModel.updateOne({ _id: id }, user).exec();
  }
}
