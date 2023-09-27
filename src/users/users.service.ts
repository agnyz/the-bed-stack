import { UsersRepository } from '@/users/users.repository';

export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async findAll() {
    return this.repository.findAll();
  }
}
