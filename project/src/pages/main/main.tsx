import { useEffect, useState } from 'react';

import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';
import usePrevious from '../../hooks/use-previous';

import { changeCityName } from '../../store/city/city';

import LoadingNotification from '../../components/notifications/loading-notification/loading-notification';
import Cities from '../../components/cities/cities';
import NoPlaces from '../../components/main/no-places/no-places';
import Places from '../../components/main/places/places';

import sortCitySpots from '../../util/sort-city-spots';

import OfferType from '../../types/offer-type';

import { CITY_LIST_ENUM } from '../../const/city-list';

type MainProps = {
  citySpots: OfferType[],
};

function getSpotsByCity(citySpots: OfferType[], city: CITY_LIST_ENUM) {
  return citySpots.filter((spot) => spot.city.name === city);
}

function Main({ citySpots }: MainProps): JSX.Element {
  const { cityName, pending } = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.sorting);
  const dispatch = useAppDispatch();

  const [currentCitySpots, setCurrentCitySpots] = useState<OfferType[]>([]);
  const prevCity = usePrevious(cityName);

  useEffect(() => {
    if (citySpots.length) {
      const filteredCityByCityName = getSpotsByCity(citySpots, cityName);
      setCurrentCitySpots(filteredCityByCityName);
    }
  }, [citySpots, cityName]);

  useEffect(() => {
    if (prevCity) {
      const sortedCitySpots = sortCitySpots(sortType, citySpots);
      dispatch(changeCityName(sortedCitySpots));
    }
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
