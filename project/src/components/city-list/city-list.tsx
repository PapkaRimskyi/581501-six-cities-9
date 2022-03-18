import { MouseEvent } from 'react';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

import { changeCityName } from '../../store/actions/city-actions/city-actions';

import CITY_LIST from '../../const/city-list';

function CityList() {
  const currentCity = useAppSelector((state) => state.cityData.city);
  const dispatch = useAppDispatch();

  function locationClickHandler(e: MouseEvent<HTMLAnchorElement>, city: string) {
    e.preventDefault();
    dispatch(changeCityName(city));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITY_LIST.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item${city === currentCity ? ' tabs__item--active' : ''}`}
                href="#"
                onClick={(e) => locationClickHandler(e, city)}
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

export default CityList;
