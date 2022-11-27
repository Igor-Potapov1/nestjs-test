import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from 'src/user/user.repository';
import { FindAllUsersQuery } from '../impl/find-all-users.query';

@QueryHandler(FindAllUsersQuery)
export class FindAllUsersHandler implements IQueryHandler<FindAllUsersQuery> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(query: FindAllUsersQuery) {
    const userFound = await this.userRepository.findAll();
    const user = this.publisher.mergeObjectContext(userFound);

    user.commit();
    return this.userRepository.findAll();
  }
}
