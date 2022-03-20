import { useEffect, useState } from 'react';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';
import usePrevious from '../../hooks/use-previous';

import { changeCitySpots } from '../../store/actions/city-actions/city-actions';

import CityList from '../../components/city-list/city-list';
import Sorting from '../../components/sorting/sorting';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';

import sortCitySpots from '../../util/sort-city-spots';

import OfferType from '../../types/offerType';

type MainProps = {
  citySpots: OfferType[],
};

function getSpotsByCity(citySpots: OfferType[], currentCity: string) {
  return citySpots.filter((spot) => spot.city.name === currentCity);
}

function Main({ citySpots }: MainProps): JSX.Element {
  const { city } = useAppSelector((state) => state.cityData);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const [currentCitySpots, setCurrentCitySpots] = useState<OfferType[]>(citySpots);
  const [currentPoint, setCurrentPoint] = useState<null | number>(null);
  const prevCity = usePrevious(city);

  useEffect(() => {
    if (citySpots.length) {
      const filteredCityByCityName = getSpotsByCity(citySpots, city);
      setCurrentCitySpots(filteredCityByCityName);
    }
  }, [citySpots, city]);

  useEffect(() => {
    if (prevCity) {
      const sortedCitySpots = sortCitySpots(sortType, citySpots);
      dispatch(changeCitySpots(sortedCitySpots));
    }
  }, [sortType]);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <CityList />

      {!currentCitySpots.length ? (
        <Spinner />
      ) : (
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCitySpots.length} places to stay in {city}</b>
              <Sorting sortType={sortType} />
              <PlacesList
                mainClass='cities__places-list places__list tabs__content'
                pageFlag='main'
                citySpots={currentCitySpots}
                setCurrentPoint={setCurrentPoint}
              />
            </section>
            <div className="cities__right-section">
              <Map
                mainClass='cities__map'
                citySettings={currentCitySpots?.[0]?.city?.location}
                points={currentCitySpots}
                currentPoint={currentPoint}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Main;
