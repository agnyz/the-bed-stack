import { db } from '@/database.providers';
import { ArticlesRepository } from '@articles/articles.repository';
import { ArticlesService } from '@articles/articles.service';
import { AuthService } from '@auth/auth.service';
import { ProfilesRepository } from '@profiles/profiles.repository';
import { ProfilesService } from '@profiles/profiles.service';
import { UsersRepository } from '@users/users.repository';
import { Elysia } from 'elysia';

export const setupArticles = () => {
  const articlesRepository = new ArticlesRepository(db);
  const profilesRepository = new ProfilesRepository(db);
  const usersRepository = new UsersRepository(db);
  const profilesService = new ProfilesService(
    profilesRepository,
    usersRepository,
  );
  const articlesService = new ArticlesService(
    articlesRepository,
    profilesService,
  );
  const authService = new AuthService();
  return new Elysia().state(() => ({ articlesService, authService }));
};
