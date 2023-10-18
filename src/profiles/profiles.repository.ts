import { eq, and, sql } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { users, userFollows } from '@users/users.model';

export class ProfilesRepository {
  constructor(private readonly db: PostgresJsDatabase) {}

  async findByUsername(currentUserId: number, targetUsername: string) {
    const result = await this.db
      .select({
        username: users.username,
        bio: users.bio,
        image: users.image,
        following: sql<boolean>`EXISTS(SELECT 1 FROM user_follows WHERE user_id = ${users.id} AND follower_id = ${currentUserId})`,
      })
      .from(users)
      .where(eq(users.username, targetUsername));
    if (result.length === 0) {
      return null;
    }
    return result[0];
  }

  async followUser(currentUserId: number, userToFollow: number) {
    const result = await this.db
      .insert(userFollows)
      .values({ user_id: userToFollow, follower_id: currentUserId })
      .returning();
    return result[0];
  }

  async unfollowUser(currentUserId: number, userToUnfollow: number) {
    const result = await this.db
      .delete(userFollows)
      .where(
        and(
          eq(userFollows.user_id, userToUnfollow),
          eq(userFollows.follower_id, currentUserId),
        ),
      )
      .returning();
    return result[0];
  }
}
