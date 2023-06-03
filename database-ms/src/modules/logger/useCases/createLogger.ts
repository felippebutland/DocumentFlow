import { Injectable } from '@nestjs/common';
import { LoggerDTO } from '../dto/logger.dto';
import { LoggerRepository } from '../repository/logger.repository';

@Injectable()
export class CreateLoggerUseCase {
  constructor(private readonly loggerRepository: LoggerRepository) {}

  async execute(logger: LoggerDTO) {
    await this.loggerRepository.createLogger(logger);
  }
}
