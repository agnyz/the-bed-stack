import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { users } from './users.schema';

export class UsersRepository {
  constructor(private readonly db: PostgresJsDatabase) {}

  async findAll() {
    return this.db.select().from(users);
  }
}
