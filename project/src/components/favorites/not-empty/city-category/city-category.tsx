import React from 'react';

import { CITY_LIST_ENUM } from '../../../../const/city-list';

type CityCategoryProps = {
  city: CITY_LIST_ENUM,
}

function CityCategory({ city }: CityCategoryProps) {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href=" ">
          <span>{city}</span>
        </a>
      </div>
    </div>
  );
}

export default CityCategory;
