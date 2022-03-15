import ReviewItem from './review-item/review-item';

import CommentType from '../../types/commentType';

type ReviewListProps = {
  reviewsData: CommentType[],
};

function ReviewList({ reviewsData }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {reviewsData.map((review) => <ReviewItem key={review.id} reviewData={review} />)};
    </ul>
  );
}

export default ReviewList;
