// users.repository.ts
// in charge of database interactions
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { eq, sql } from 'drizzle-orm';
import { User, UserToCreate, UserToUpdate } from '@users/users.schema';
import { users } from '@users/users.model';

export class UsersRepository {
  constructor(private readonly db: PostgresJsDatabase) {}

  async findAll() {
    return await this.db.select().from(users);
  }

  async findById(id: number) {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    if (result.length === 0) {
      return null;
    }
    return result[0];
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

  async findByUsername(username: string) {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.username, username));
    if (result.length === 0) {
      return null;
    }
    if (result.length > 1) {
      throw new Error(
        `More than one user found with the same username: ${username}`,
      );
    }
    return result[0];
  }

  async createUser(user: UserToCreate) {
    const newUser = await this.db
      .insert(users)
      .values(user)
      .onConflictDoNothing()
      .returning();
    // returning returns the inserted row in an array, so we need to get the first element
    return newUser[0];
  }

  async updateUser(id: number, user: UserToUpdate) {
    const updatedUser = await this.db
      .update(users)
      .set(user)
      .where(eq(users.id, id))
      .returning();
    return updatedUser[0];
  }

  async deleteAll() {
    // when deleting all rows, we need to reset the sequence
    // otherwise, new rows will start with the next ID
    await this.db.execute(sql`ALTER SEQUENCE users_id_seq RESTART WITH 1`);
    // we are likely deleting more than one row, return the whole result (and not `result[0]`)
    return await this.db.delete(users).returning();
  }
}
