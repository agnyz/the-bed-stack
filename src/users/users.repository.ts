// users.repository.ts
// in charge of database interactions

import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { users } from './users.schema';

export class UsersRepository {
  // the type here is
  constructor(private readonly db: PostgresJsDatabase) {}

  async findAll() {
    return this.db.select().from(users);
  }
}
