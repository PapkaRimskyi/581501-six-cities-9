import { MouseEvent } from 'react';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

import { changeCityName } from '../../store/city/city';

import { CITY_LIST, CITY_LIST_ENUM } from '../../const/city-list';

function Cities() {
  const { cityName } = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  function locationClickHandler(e: MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const selectedCity = target.textContent as CITY_LIST_ENUM;
    dispatch(changeCityName(selectedCity));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY_LIST.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item${city === cityName ? ' tabs__item--active' : ''}`}
                href=" "
                onClick={locationClickHandler}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Cities;
