import buildDateReview from '../../../../../util/build-data-review';

import CommentType from '../../../../../types/offer-type/comment-type/comment-type';

import { MIN_RATING } from '../../../../../const/common-const';

type CommentsItemProps = {
  comment: CommentType,
}

function CommentsItem({ comment }: CommentsItemProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${comment.rating * MIN_RATING}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{buildDateReview(comment.date)}</time>
      </div>
    </li>
  );
}

export default CommentsItem;
