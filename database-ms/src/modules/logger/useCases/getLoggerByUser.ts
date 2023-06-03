import { Injectable } from '@nestjs/common';
import { LoggerRepository } from '../repository/logger.repository';

@Injectable()
export class GetLoggerByUserUseCase {
  constructor(private readonly loggerRepository: LoggerRepository) {}

  async execute(id: string) {
    await this.loggerRepository.getLoggerByUser(id);
  }
}
