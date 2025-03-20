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
    const article = await this.commentsRepository.findBySlug(articleSlug);

    if (!article) {
      throw new BadRequestError(`Article with slug ${articleSlug} not found`);
    }

    const commentData: CommentToCreate = {
      ...commentBody,
      authorId: userId,
      articleId: article.id,
    };

    const comment = await this.commentsRepository.create(commentData);
    const authorProfile = await this.profilesService.findByUserId(
      userId,
      comment.authorId,
    );

    return {
      id: comment.id,
      body: comment.body,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
      author: authorProfile.profile,
    };
  }

  async getComments(
    articleSlug: string,
    currentUserId?: number,
  ): Promise<ReturnedComment[]> {
    const article = await this.commentsRepository.findBySlug(articleSlug);

    if (!article) {
      throw new BadRequestError(`Article with slug ${articleSlug} not found`);
    }

    const comments = await this.commentsRepository.findManyByArticleId(
      article.id,
    );

    const returnedComments = await Promise.all(
      comments.map(async (comment) => {
        const authorProfile = await this.profilesService.findByUserId(
          currentUserId || 0,
          comment.authorId,
        );

        return {
          id: comment.id,
          body: comment.body,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt,
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
    const article = await this.commentsRepository.findBySlug(articleSlug);

    if (!article) {
      throw new BadRequestError(`Article with slug ${articleSlug} not found`);
    }

    const comment = await this.commentsRepository.findById(commentId);

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

    await this.commentsRepository.delete(commentId, userId);
  }
}
