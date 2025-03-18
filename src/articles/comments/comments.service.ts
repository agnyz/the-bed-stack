import { AuthorizationError, BadRequestError } from '@errors';
import type { ProfilesService } from '@profiles/profiles.service';
import type { UsersRepository } from '@users/users.repository';
import type { CommentsRepository } from './comments.repository';
import type { CommentToCreate, ReturnedComment } from './comments.schema';

export class CommentsService {
  constructor(
    private readonly commentsRepository: CommentsRepository,
    private readonly profilesService: ProfilesService,
    private readonly usersRepository: UsersRepository,
  ) {}

  async createComment(
    articleSlug: string,
    commentBody: { body: string },
    userId: number,
  ): Promise<ReturnedComment> {
    const article = await this.commentsRepository.getArticleBySlug(articleSlug);

    if (!article) {
      throw new BadRequestError(`Article with slug ${articleSlug} not found`);
    }

    const commentData: CommentToCreate = {
      ...commentBody,
      authorId: userId,
      articleId: article.id,
    };

    const comment = await this.commentsRepository.createComment(commentData);
    const authorUsername = await this.getAuthorUsername(comment.authorId);
    const authorProfile = await this.profilesService.findByUsername(
      userId,
      authorUsername,
    );

    return {
      id: comment.id,
      body: comment.body,
      createdAt: comment.createdAt.toISOString(),
      updatedAt: comment.updatedAt.toISOString(),
      author: authorProfile.profile,
    };
  }

  async getComments(
    articleSlug: string,
    currentUserId?: number,
  ): Promise<ReturnedComment[]> {
    const article = await this.commentsRepository.getArticleBySlug(articleSlug);

    if (!article) {
      throw new BadRequestError(`Article with slug ${articleSlug} not found`);
    }

    const comments = await this.commentsRepository.getCommentsByArticleId(
      article.id,
    );

    const returnedComments = await Promise.all(
      comments.map(async (comment) => {
        const authorUsername = await this.getAuthorUsername(comment.authorId);
        const authorProfile = await this.profilesService.findByUsername(
          currentUserId || 0,
          authorUsername,
        );

        return {
          id: comment.id,
          body: comment.body,
          createdAt: comment.createdAt.toISOString(),
          updatedAt: comment.updatedAt.toISOString(),
          author: authorProfile.profile,
        };
      }),
    );

    return returnedComments;
  }

  async deleteComment(
    articleSlug: string,
    commentId: number,
    userId: number,
  ): Promise<void> {
    const article = await this.commentsRepository.getArticleBySlug(articleSlug);

    if (!article) {
      throw new BadRequestError(`Article with slug ${articleSlug} not found`);
    }

    const comment = await this.commentsRepository.getCommentById(commentId);

    if (!comment) {
      throw new BadRequestError(`Comment with id ${commentId} not found`);
    }

    if (comment.articleId !== article.id) {
      throw new BadRequestError(
        `Comment with id ${commentId} does not belong to article ${articleSlug}`,
      );
    }

    if (comment.authorId !== userId) {
      throw new AuthorizationError(
        'You can only delete comments that you authored',
      );
    }

    await this.commentsRepository.deleteComment(commentId, userId);
  }

  private async getAuthorUsername(userId: number): Promise<string> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new BadRequestError(`User with id ${userId} not found`);
    }
    return user.username;
  }
}
