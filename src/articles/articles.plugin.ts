import { setupArticles } from '@articles/articles.module';
import {
  ArticleFeedQuerySchema,
  DeleteArticleResponse,
  InsertArticleSchema,
  ListArticlesQuerySchema,
  ReturnedArticleListSchema,
  ReturnedArticleResponseSchema,
  UpdateArticleSchema,
} from '@articles/articles.schema';
import { Elysia } from 'elysia';

export const articlesPlugin = new Elysia().use(setupArticles).group(
  '/articles',
  {
    detail: {
      tags: ['Articles'],
    },
  },
  (app) =>
    app
      .get(
        '/',
        async ({ query, store, request }) =>
          store.articlesService.find({
            ...query,
            currentUserId: await store.authService.getOptionalUserIdFromHeader(
              request.headers,
            ),
          }),
        {
          query: ListArticlesQuerySchema,
          response: ReturnedArticleListSchema,
          detail: {
            summary: 'List Articles',
          },
        },
      )
      .post(
        '/',
        async ({ body, request, store }) =>
          store.articlesService.createArticle(
            body.article,
            await store.authService.getUserIdFromHeader(request.headers),
          ),
        {
          beforeHandle: app.store.authService.requireLogin,
          body: InsertArticleSchema,
          response: ReturnedArticleResponseSchema,
          detail: {
            summary: 'Create Article',
          },
        },
      )
      .get(
        '/feed',
        async ({ query, store, request }) =>
          store.articlesService.find({
            ...query,
            currentUserId: await store.authService.getUserIdFromHeader(
              request.headers,
            ),
            followedAuthors: true,
          }),
        {
          beforeHandle: app.store.authService.requireLogin,
          query: ArticleFeedQuerySchema,
          response: ReturnedArticleListSchema,
          detail: {
            summary: 'Artifle Feed',
          },
        },
      )
      .get(
        '/:slug',
        async ({ params, store, request }) =>
          store.articlesService.findBySlug(
            params.slug,
            await store.authService.getOptionalUserIdFromHeader(
              request.headers,
            ),
          ),
        {
          response: ReturnedArticleResponseSchema,
          detail: {
            summary: 'Get Article',
          },
        },
      )
      .put(
        '/:slug',
        async ({ params, body, store, request }) =>
          store.articlesService.updateArticle(
            params.slug,
            body.article,
            await store.authService.getUserIdFromHeader(request.headers),
          ),
        {
          beforeHandle: app.store.authService.requireLogin,
          body: UpdateArticleSchema,
          response: ReturnedArticleResponseSchema,
          detail: {
            summary: 'Update Article',
          },
        },
      )
      .delete(
        '/:slug',
        async ({ params, store, request }) =>
          store.articlesService.deleteArticle(
            params.slug,
            await store.authService.getUserIdFromHeader(request.headers),
          ),
        {
          beforeHandle: app.store.authService.requireLogin,
          response: DeleteArticleResponse,
          detail: {
            summary: 'Delete Article',
          },
        },
      ),
);
