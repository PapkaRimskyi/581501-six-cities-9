import { generatePath, Link } from 'react-router-dom';

import OfferType from '../../../types/offerType';

import ROUTES_PATHS from '../../../const/routes-paths';

type PlaceCardProps = {
  cardInfo: OfferType,
  onMouseEnterHandler: () => void,
  onMouseLeaveHandler: () => void,
}

function PlaceCard({ cardInfo, onMouseEnterHandler, onMouseLeaveHandler }: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      {cardInfo.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(ROUTES_PATHS.ROOM, { id: cardInfo.id.toString() })}>
          <img className="place-card__image" src={cardInfo.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardInfo.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
          <Link to={generatePath(ROUTES_PATHS.ROOM, { id: cardInfo.id.toString() })}>{cardInfo.description}</Link>
        </h2>
        <p className="place-card__type">{cardInfo.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
