import { Logger } from '@modules/schemas/logger.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoggerDTO } from '../dto/logger.dto';

export class LoggerRepository {
  constructor(
    @InjectModel(Logger.name) private readonly loggerModel: Model<Logger>,
  ) {}

  async createLogger(logger: LoggerDTO): Promise<void> {
    console.log(logger);
    await this.loggerModel.create(logger);
  }

  async getLoggerByUser(id: string) {
    return this.loggerModel
      .find({
        user: id,
      })
      .exec();
  }
}
