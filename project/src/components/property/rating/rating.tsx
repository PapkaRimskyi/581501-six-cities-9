import OfferType from '../../../types/offer-type';

type RatingProps = Pick<OfferType, 'rating'>;

function Rating({ rating }: RatingProps) {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{ width: `${20 * rating}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}

export default Rating;
