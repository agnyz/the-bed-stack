import { UsersRepository } from '@/users/users.repository';

export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async findAll() {
    console.log('Hey there delilah, whats it like in new york city');
    return this.repository.findAll();
  }
}
