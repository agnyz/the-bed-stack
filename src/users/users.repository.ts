// users.repository.ts
// in charge of database interactions

import { users } from "./users.schema";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";

export class UsersRepository {
  // the type here is
  constructor(private readonly db: PostgresJsDatabase) {}

  async findAll() {
    return this.db.select().from(users);
  }
}
