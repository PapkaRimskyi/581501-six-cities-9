import { MouseEvent } from 'react';

import { CITY_LIST_ENUM } from '../../../../const/city-list';

type CitiesItemProps = {
  currentCity: CITY_LIST_ENUM,
  cityOption: CITY_LIST_ENUM,
  locationClickHandler: (e: MouseEvent) => void,
}

function CitiesItem({ currentCity, cityOption, locationClickHandler }: CitiesItemProps) {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item${cityOption === currentCity ? ' tabs__item--active' : ''}`}
        href=" "
        onClick={locationClickHandler}
      >
        <span>{cityOption}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
