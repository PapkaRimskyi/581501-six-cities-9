import React, { ChangeEvent } from 'react';

type RatingStarsProps = {
  reviewStars: string | null,
  onChangeRatingHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStars({ reviewStars, onChangeRatingHandler }: RatingStarsProps) {
  return (
    <div className="reviews__rating-form form__rating">
      <input
        checked={reviewStars === '5'}
        className="form__rating-input visually-hidden"
        name="rating"
        value="5"
        id="5-stars"
        type="radio"
        onChange={onChangeRatingHandler}
      />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>

      <input
        checked={reviewStars === '4'}
        className="form__rating-input visually-hidden"
        name="rating"
        value="4"
        id="4-stars"
        type="radio"
        onChange={onChangeRatingHandler}
      />
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>

      <input
        checked={reviewStars === '3'}
        className="form__rating-input visually-hidden"
        name="rating"
        value="3"
        id="3-stars"
        type="radio"
        onChange={onChangeRatingHandler}
      />
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>

      <input
        checked={reviewStars === '2'}
        className="form__rating-input visually-hidden"
        name="rating"
        value="2"
        id="2-stars"
        type="radio"
        onChange={onChangeRatingHandler}
      />
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>

      <input
        checked={reviewStars === '1'}
        className="form__rating-input visually-hidden"
        name="rating"
        value="1"
        id="1-star"
        type="radio"
        onChange={onChangeRatingHandler}
      />
      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </div>
  );
}

export default React.memo(RatingStars);
