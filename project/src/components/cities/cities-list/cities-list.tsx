import { MouseEvent } from 'react';

import useAppSelector from '../../../hooks/use-app-selector';
import useAppDispatch from '../../../hooks/use-app-dispatch';

import { changeCityName } from '../../../store/city/city';

import CitiesItem from './cities-item/cities-item';

import { CITY_LIST, CITY_LIST_ENUM } from '../../../const/city-list';

function CitiesList() {
  const { cityName } = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  function cityClickHandler(e: MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const selectedCity = target.textContent as CITY_LIST_ENUM;
    dispatch(changeCityName(selectedCity));
  }

  return (
    <ul className="locations__list tabs__list">
      {CITY_LIST.map((cityOption) =>
        <CitiesItem key={cityOption} currentCity={cityName} cityOption={cityOption} cityClickHandler={cityClickHandler} />,
      )}
    </ul>
  );
}

export default CitiesList;
