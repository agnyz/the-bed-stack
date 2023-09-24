
import { Database } from 'bun:sqlite';
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { drizzle, BunSQLiteDatabase } from 'drizzle-orm/bun-sqlite';

import { users } from './schemas/users';

const sqlite = new Database('sqlite.db');
const db: BunSQLiteDatabase = drizzle(sqlite);

migrate(db, { migrationsFolder: "./migrations" });

console.log("Migrations complete.")
const data = {
    email: 'test@email.com',
    username: 'test',
    password: 'test',
    bio: 'test',
    image: 'test',
}
console.log("Inserting user: ", data)
await db.insert(users).values(data)
console.log("User inserted")

const userResult = await db.select().from(users);
console.log("User result: ", userResult);