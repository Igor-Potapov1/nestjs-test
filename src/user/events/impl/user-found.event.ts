import { IEvent } from '@nestjs/cqrs';
import { UserDocument } from 'src/user/user.schema';

export class UserFoundEvent implements IEvent {
  constructor(public readonly data: Promise<UserDocument[]>) {}
}
