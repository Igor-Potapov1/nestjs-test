import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserFoundEvent } from '../impl/user-found.event';

@EventsHandler(UserFoundEvent)
export class UserFoundHandler implements IEventHandler<UserFoundEvent> {
  handle(event: UserFoundEvent) {
    console.log(event.data);
  }
}
