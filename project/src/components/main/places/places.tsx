import { useState } from 'react';

import useHoverCard from '../../../hooks/use-hover-card';

import Sorting from '../../sorting/sorting';
import PlacesList from '../../places-list/places-list';
import Map from '../../map/map';

import OfferType from '../../../types/offer-type';

import { CITY_LIST_ENUM } from '../../../const/city-list';
import { SORTING_LIST_ENUM } from '../../../const/sorting-list';
import { PLACES_CLASS, PLACES_PAGE_FLAG } from '../../places-list/const';
import { MAP_CLASS } from '../../map/const';

type PlacesProps = {
  citySpots: OfferType[],
  currentCitySpots: OfferType[],
  cityName: CITY_LIST_ENUM,
  sortType: SORTING_LIST_ENUM,
}

function Places({ citySpots, currentCitySpots, cityName, sortType }: PlacesProps) {
  const [currentPoint, setCurrentPoint] = useState<null | string>(null);

  const hoverCardHandlers = useHoverCard(setCurrentPoint);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentCitySpots.length} places to stay in {cityName}</b>

        <Sorting sortType={sortType} />

        <PlacesList
          mainClass={PLACES_CLASS.CITIES_PLACES_LIST}
          pageFlag={PLACES_PAGE_FLAG.MAIN}
          citySpots={currentCitySpots}
          hoverCardHandlers={hoverCardHandlers}
        />
      </section>
      <div className="cities__right-section">
        <Map
          mainClass={MAP_CLASS.CITIES_MAP}
          citySettings={currentCitySpots?.[0]?.city?.location}
          points={citySpots}
          currentPoint={currentPoint}
        />
      </div>
    </div>
  );
}

export default Places;
