import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserRepository } from 'src/user/user.repository';
import { UserCreatedEvent } from '../impl/user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(event: UserCreatedEvent) {
    console.log(event.user);
  }
}
