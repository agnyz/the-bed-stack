import { articles, type favoriteArticles } from '@articles/articles.model';
import type { Profile } from '@profiles/profiles.schema';
import { type Static, Type } from '@sinclair/typebox';
import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

export const insertArticleSchemaRaw = createInsertSchema(articles);
export const selectArticleSchemaRaw = createSelectSchema(articles);

export const InsertArticleSchema = Type.Object({
  article: Type.Pick(insertArticleSchemaRaw, [
    'title',
    'description',
    'body',
    'tagList',
  ]),
});

export type ArticleToCreateData = Static<typeof InsertArticleSchema>['article'];
export type ArticleToCreate = ArticleToCreateData & {
  authorId: number;
  slug: string;
};

export const UpdateArticleSchema = Type.Object({
  article: Type.Partial(
    Type.Pick(insertArticleSchemaRaw, [
      'title',
      'description',
      'body',
      'tagList',
    ]),
  ),
});

export type ArticleToUpdate = Static<typeof UpdateArticleSchema>['article'];

const returnArticleSchemaRaw = Type.Composite([
  Type.Object({
    slug: Type.String(),
    title: Type.String(),
    description: Type.String(),
    body: Type.String(),
    tagList: Type.Array(Type.String()),
    createdAt: Type.String({ format: 'date-time' }),
    updatedAt: Type.String({ format: 'date-time' }),
    favorited: Type.Boolean(),
    favoritesCount: Type.Number(),
  }),
  Type.Object({
    author: Type.Any(),
  }),
]);

export const ReturnedArticleSchema = returnArticleSchemaRaw;

export const ReturnedArticleResponseSchema = Type.Object({
  article: ReturnedArticleSchema,
});

export const DeleteArticleResponse = Type.Object({});

export type ReturnedArticle = Static<typeof ReturnedArticleSchema>;

export type ArticleInDb = Omit<
  typeof articles.$inferSelect,
  'id' | 'authorId'
> & {
  author: Profile;
  favoritedBy: ArticleFavoritedBy[];
};

export type ArticleFavoritedBy = typeof favoriteArticles.$inferSelect;

export const ArticleFeedQuerySchema = Type.Object({
  limit: Type.Optional(Type.Number({ minimum: 1, default: 20 })),
  offset: Type.Optional(Type.Number({ minimum: 0, default: 0 })),
});

export const ListArticlesQuerySchema = Type.Composite([
  ArticleFeedQuerySchema,
  Type.Object({
    tag: Type.Optional(Type.String()),
    author: Type.Optional(Type.String()),
    favorited: Type.Optional(Type.String()),
  }),
]);

export const ReturnedArticleListSchema = Type.Object({
  articles: Type.Array(Type.Omit(ReturnedArticleSchema, ['body'])),
  articlesCount: Type.Number(),
});

export type ReturnedArticleList = Static<typeof ReturnedArticleListSchema>;
