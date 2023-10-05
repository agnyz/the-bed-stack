// users.repository.ts
// in charge of database interactions

import { users } from './users.model';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { UserToCreate } from '@/users/users.schema';
import { eq } from 'drizzle-orm';

export class UsersRepository {
  constructor(private readonly db: PostgresJsDatabase) {}

  async findAll() {
    return await this.db.select().from(users);
  }

  async findByEmail(email: string) {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.email, email));
    if (result.length === 0) {
      return null;
    }
    if (result.length > 1) {
      throw new Error(`More than one user found with the same email: ${email}`);
    }
    return result[0];
  }

  async createUser(user: UserToCreate) {
    const newUser = await this.db.insert(users).values(user).returning();
    // returning returns the inserted row in an array, so we need to get the first element
    return newUser[0];
  }
}
