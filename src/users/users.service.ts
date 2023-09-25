import {db} from "@/database.providers";
import {users} from "./users.schema";

export class UsersService {
    async findAll() {
        return db.select().from(users);
    }
}
