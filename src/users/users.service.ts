// users.service.ts
// in charge of business logic - generate slug, fetch data from other services, cache something, etc.

import { UsersRepository } from '@/users/users.repository';

export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async findAll() {
    return this.repository.findAll();
  }
}
