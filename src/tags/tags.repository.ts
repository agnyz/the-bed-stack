import type { Database } from '@/database.providers';
import { articleTags, tags } from '@tags/tags.model';
import type { ArticleTagToInsert, TagToInsert } from '@tags/tags.schema';
import { and, eq, inArray } from 'drizzle-orm';

export class TagsRepository {
  constructor(private readonly db: Database) {}

  async getTags() {
    return await this.db.query.tags.findMany();
  }

  async upsertTags(data: TagToInsert[]) {
    return await this.db
      .insert(tags)
      .values(data)
      .onConflictDoUpdate({
        target: tags.name,
        set: { updatedAt: new Date() },
      })
      .returning();
  }

  async getArticleTags(articleId: number) {
    return await this.db.query.articleTags.findMany({
      where: eq(articleTags.articleId, articleId),
    });
  }

  async upsertArticleTags(data: ArticleTagToInsert[]) {
    return await this.db
      .insert(articleTags)
      .values(data)
      .onConflictDoUpdate({
        target: [articleTags.articleId, articleTags.tagName],
        set: { updatedAt: new Date() },
      })
      .returning();
  }

  async deleteArticleTags({
    articleId,
    tagNames,
  }: {
    articleId: number;
    tagNames?: string[];
  }) {
    const filters = [];
    // articleId is is required to ensure we only delete tags for a specific article
    filters.push(eq(articleTags.articleId, articleId));

    // If tagNames are provided, delete only those tags
    if (tagNames) {
      filters.push(inArray(articleTags.tagName, tagNames));
    }

    return await this.db
      .delete(articleTags)
      .where(and(...filters))
      .returning();
  }
}
