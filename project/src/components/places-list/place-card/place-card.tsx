import { Link } from 'react-router-dom';

import useFavoriteCardState from '../../../hooks/use-favorite-card-state';

import OfferType from '../../../types/offer-type';

type PlaceCardProps = {
  cardInfo: OfferType,
  linkHref: string,
  onMouseEnterHandler: () => void,
  onMouseLeaveHandler: () => void,
}

function PlaceCard({ cardInfo, linkHref, onMouseEnterHandler, onMouseLeaveHandler }: PlaceCardProps): JSX.Element {
  const { changeFavoriteFlagStatus, isCardInFavoriteCollection } = useFavoriteCardState(cardInfo);

  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {cardInfo.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={linkHref}>
          <img className="place-card__image" src={cardInfo.previewImage} width="260" height="200" alt="Illustration of place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardInfo.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${!isCardInFavoriteCollection() ? ' place-card__bookmark-button--active' : ''} button`} type="button" onClick={changeFavoriteFlagStatus}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${20 * cardInfo.rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkHref}>{cardInfo.description}</Link>
        </h2>
        <p className="place-card__type">{cardInfo.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
