import OfferType from '../../../../../types/offer-type/offer-type';

import CityCategory from './city-category/city-category';
import PlacesList from '../../../../places-list/places-list';

import { PLACES_CLASS, PLACES_PAGE_FLAG } from '../../../../places-list/const';
import { CITY_LIST_ENUM } from '../../../../../const/city-list';

type FavoritesItemsProps = {
  city: CITY_LIST_ENUM,
  citySpots: OfferType[],
}

function FavoritesItems({ city, citySpots }: FavoritesItemsProps) {
  return (
    <li className="favorites__locations-items">
      <CityCategory city={city} />

      <PlacesList
        mainClass={PLACES_CLASS.FAVORITES_PLACES_LIST}
        pageFlag={PLACES_PAGE_FLAG.FAVORITES}
        citySpots={citySpots}
      />
    </li>
  );
}

export default FavoritesItems;
