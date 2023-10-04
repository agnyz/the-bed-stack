// users.service.ts
// in charge of business logic - generate slug, fetch data from other services, cache something, etc.
import { NotFoundError } from 'elysia';
import { UsersRepository } from '@/users/users.repository';
import { UserInDb, UserToCreate } from '@/users/users.schema';
import { generateToken } from '@/auth';
import { AuthenticationError } from '@/errors';

export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async findByEmail(email: string) {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return await this.generateUserResponse(user);
  }

  async createUser(user: UserToCreate) {
    user.password = await Bun.password.hash(user.password);
    const newUser = await this.repository.createUser(user);
    return await this.generateUserResponse(newUser);
  }

  async loginUser(email: string, password: string) {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    if (!(await Bun.password.verify(password, user.password))) {
      throw new AuthenticationError('Invalid password');
    }
    return await this.generateUserResponse(user);
  }

  async generateUserResponse(user: UserInDb) {
    return {
      user: {
        email: user.email,
        bio: user.bio,
        image: user.image,
        username: user.username,
        token: await generateToken(user),
      },
    };
  }
}
