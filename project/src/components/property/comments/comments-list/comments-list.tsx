import CommentsItem from './comment-item/comments-item';

import CommentType from '../../../../types/offer-type/comment-type/comment-type';

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
