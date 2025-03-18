import { type Static, Type } from '@sinclair/typebox';

export const AddCommentSchema = Type.Object({
  comment: Type.Object({
    body: Type.String(),
  }),
});

export type CommentToCreate = Static<typeof AddCommentSchema>['comment'] & {
  authorId: number;
  articleId: number;
};

export const CommentSchema = Type.Object({
  id: Type.Number(),
  body: Type.String(),
  createdAt: Type.String({ format: 'date-time' }),
  updatedAt: Type.String({ format: 'date-time' }),
  author: Type.Any(),
});

export type ReturnedComment = Static<typeof CommentSchema>;

export const ReturnedCommentResponse = Type.Object({
  comment: CommentSchema,
});

export const ReturnedCommentsResponse = Type.Object({
  comments: Type.Array(CommentSchema),
});

export const DeleteCommentResponse = Type.Object({});
