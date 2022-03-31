import OfferType from '../../../../types/offer-type/offer-type';

import FavoritesItems from './favorites-items/favorites-items';

import { CITY_LIST, CITY_LIST_ENUM } from '../../../../const/city-list';

type FavoritesListProps = {
  favoritesCards: OfferType[],
}

function FavoritesList({ favoritesCards }: FavoritesListProps ) {
  const citiesWithFavoritesCard = CITY_LIST.filter((city) => favoritesCards.find((favorite) => city === favorite.city.name));

  function getFavoritesPlacesByCity(city: CITY_LIST_ENUM) {
    return favoritesCards.filter((card) => card.city.name === city);
  }

  return (
    <ul className="favorites__list">
      {citiesWithFavoritesCard.map((city) => <FavoritesItems key={city} city={city} citySpots={getFavoritesPlacesByCity(city)} />)}
    </ul>
  );
}

export default FavoritesList;
