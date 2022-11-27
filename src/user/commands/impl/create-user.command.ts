import { ICommand } from '@nestjs/cqrs';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateUserCommand implements ICommand {
  constructor(public readonly userDto: CreateUserDto) {}
}
