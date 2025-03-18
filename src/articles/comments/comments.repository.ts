import { and, desc, eq } from 'drizzle-orm';

import type { Database } from '@/database.providers';
import { articles, comments } from '@articles/articles.model';
import type { CommentToCreate } from './comments.schema';

export class CommentsRepository {
  constructor(private readonly db: Database) {}

  async createComment(commentData: CommentToCreate) {
    const [comment] = await this.db
      .insert(comments)
      .values(commentData)
      .returning();

    return comment;
  }

  async getCommentById(id: number) {
    const [comment] = await this.db
      .select()
      .from(comments)
      .where(eq(comments.id, id));

    return comment;
  }

  async getCommentsByArticleId(articleId: number) {
    const articleComments = await this.db
      .select()
      .from(comments)
      .where(eq(comments.articleId, articleId))
      .orderBy(desc(comments.createdAt));

    return articleComments;
  }

  async getArticleBySlug(slug: string) {
    const [article] = await this.db
      .select()
      .from(articles)
      .where(eq(articles.slug, slug));

    return article;
  }

  async deleteComment(commentId: number, authorId: number) {
    await this.db
      .delete(comments)
      .where(and(eq(comments.id, commentId), eq(comments.authorId, authorId)));
  }
}
