import CommentsItem from './comment-item/comments-item';

import CommentType from '../../../../types/comment-type';

type CommentsListProps = {
  comments: CommentType[],
};

function CommentsList({ comments }: CommentsListProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <CommentsItem key={comment.id} comment={comment} />)}
    </ul>
  );
}

export default CommentsList;
