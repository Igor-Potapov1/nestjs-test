import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { CreateUserDto } from './dto/create-user.dto';
import { FindAllUsersQuery } from './queries/impl/find-all-users.query';

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}
  async findAll() {
    return this.queryBus.execute(new FindAllUsersQuery());
  }

  async createUser(dto: CreateUserDto) {
    return this.commandBus.execute(new CreateUserCommand(dto));
  }
}
