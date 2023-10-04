import { Elysia } from 'elysia';
import { getUserIdFromHeader, requireLogin } from '@/auth';
import { setupProfiles } from '@/profiles/profiles.module';
import { ReturnedProfileSchema } from '@/profiles/profiles.schema';

export const profilesPlugin = new Elysia()
  .use(setupProfiles)
  .group('/profiles/:username', (app) =>
    app
      .get(
        '',
        async ({ params, store, request }) =>
          store.profilesService.findByUsername(
            await getUserIdFromHeader(request.headers),
            params.username,
          ),
        {
          beforeHandle: requireLogin,
          response: ReturnedProfileSchema,
          detail: {
            summary: 'Get a profile',
          },
        },
      )
      .post(
        '/follow',
        async ({ params, store, request }) =>
          store.profilesService.followUser(
            await getUserIdFromHeader(request.headers),
            params.username,
          ),
        {
          beforeHandle: requireLogin,
          response: ReturnedProfileSchema,
          detail: {
            summary: 'Follow a profile',
          },
        },
      )

      .delete(
        '/follow',
        async ({ params, store, request }) =>
          store.profilesService.unfollowUser(
            await getUserIdFromHeader(request.headers),
            params.username,
          ),
        {
          beforeHandle: requireLogin,
          response: ReturnedProfileSchema,
          detail: {
            summary: 'Unfollow a profile',
          },
        },
      ),
  );
