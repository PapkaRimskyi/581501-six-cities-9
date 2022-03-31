import useFavoriteCardState from '../../../hooks/use-favorite-card-state';

import OfferType from '../../../types/offer-type/offer-type';

type NameAndMarkProps = Pick<OfferType, 'isPremium' | 'title'> & { currentProperty: OfferType };

function NameAndMark({ currentProperty, isPremium, title }: NameAndMarkProps) {
  const { changeFavoriteFlagStatus, isCardInFavoriteCollection } = useFavoriteCardState(currentProperty);

  return (
    <>
      {isPremium && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className={`property__bookmark-button${!isCardInFavoriteCollection() ? ' property__bookmark-button--active' : ''} button`} type="button" onClick={changeFavoriteFlagStatus}>
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
    </>
  );
}

export default NameAndMark;
