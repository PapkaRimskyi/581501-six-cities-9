import { useEffect, useState } from 'react';

import useAppSelector from '../../hooks/use-app-selector';
import usePrevious from '../../hooks/use-previous';

import LoadingNotification from '../../components/notifications/loading-notification/loading-notification';
import Cities from '../../components/cities/cities';
import NoPlaces from '../../components/main/no-places/no-places';
import Places from '../../components/main/places/places';

import sortCitySpots from '../../util/sort-city-spots';

import OfferType from '../../types/offer-type/offer-type';

import { CITY_LIST_ENUM } from '../../const/city-list';

function getSpotsByCity(citySpots: OfferType[], city: CITY_LIST_ENUM) {
  return citySpots.filter((spot) => spot.city.name === city);
}

function Main(): JSX.Element {
  const { citySpots } = useAppSelector((state) => state.city);
  const { cityName, pending } = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.sorting);

  const [currentCitySpots, setCurrentCitySpots] = useState<OfferType[]>([]);
  const prevCity = usePrevious(cityName);

  // ругалось на зависимость sortType. Решил разделить логику. Во втором useEffect'е обрабатывается логика при смене sortType
  useEffect(() => {
    if (citySpots.length) {
      const filteredCityByCityName = getSpotsByCity(citySpots, cityName);
      const sortedCitySpots = sortCitySpots(sortType, filteredCityByCityName);
      setCurrentCitySpots(sortedCitySpots);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [citySpots, cityName]);

  // ругалось на currentCitySpots и prevCity. проверка на prevCity позволяет избежать запуска ненужного функционала. Тк по дефолту мне ничего сортировать не надо. Как пришли данные, так и отдал.
  useEffect(() => {
    if (prevCity) {
      const sortedCitySpots = sortCitySpots(sortType, currentCitySpots);
      setCurrentCitySpots(sortedCitySpots);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <Cities />

      {pending
        ? <LoadingNotification />
        : (
          <div className="cities">
            {!currentCitySpots.length
              ? <NoPlaces cityName={cityName} />
              : <Places citySpots={citySpots} currentCitySpots={currentCitySpots} cityName={cityName} sortType={sortType} />}
          </div>
        )}
    </main>
  );
}

export default Main;
