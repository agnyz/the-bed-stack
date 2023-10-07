import { AuthService } from '@/auth/auth.service';
import { db } from '@/database.providers';
import { ProfilesRepository } from '@/profiles/profiles.repository';
import { ProfilesService } from '@/profiles/profiles.service';
import { UsersRepository } from '@/users/users.repository';
import { Elysia } from 'elysia';

export const setupProfiles = () => {
  const usersRepository = new UsersRepository(db);
  const profilesepository = new ProfilesRepository(db);
  const profilesService = new ProfilesService(
    profilesepository,
    usersRepository,
  );
  const authService = new AuthService();
  return new Elysia().state(() => ({ profilesService, authService }));
};
