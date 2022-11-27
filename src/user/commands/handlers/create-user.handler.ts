import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from 'src/user/user.repository';
import { CreateUserCommand } from '../impl/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand) {
    const { userDto } = command;
    const userCreated = await this.userRepository.createOne(userDto);
    const user = this.publisher.mergeObjectContext(userCreated);

    user.createdUser();
    user.commit();
    return user;
  }
}
