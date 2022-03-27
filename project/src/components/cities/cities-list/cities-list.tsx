import { MouseEvent } from 'react';

import CitiesItem from './cities-item/cities-item';

import { CITY_LIST, CITY_LIST_ENUM } from '../../../const/city-list';

type CitiesListProps = {
  currentCity: CITY_LIST_ENUM,
  locationClickHandler: (e: MouseEvent) => void,
};

function CitiesList({ currentCity, locationClickHandler }: CitiesListProps) {
  return (
    <ul className="locations__list tabs__list">
      {CITY_LIST.map((cityOption) =>
        <CitiesItem key={cityOption} currentCity={currentCity} cityOption={cityOption} locationClickHandler={locationClickHandler} />,
      )}
    </ul>
  );
}

export default CitiesList;
