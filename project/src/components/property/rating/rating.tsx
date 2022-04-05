import OfferType from '../../../types/offer-type/offer-type';

import { MIN_RATING } from '../../../const/common-const';

type RatingProps = Pick<OfferType, 'rating'>;

function Rating({ rating }: RatingProps) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: `${MIN_RATING * rating}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default Rating;
