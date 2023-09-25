import {users} from "./users.schema";
import {PostgresJsDatabase} from "drizzle-orm/postgres-js";

// note that we should specifically NOT import the db and use it here
// so we can mock it in tests and switch it out as needed
// also, this would hurt the single responsibility principle.

export class UsersService {

    // the type here is
    constructor(private readonly db: PostgresJsDatabase) {}

    async findAll() {
        return this.db.select().from(users);
    }
}

// export a factory for consistency with other providers (like the controller)
export default (db: PostgresJsDatabase) => new UsersService(db);
