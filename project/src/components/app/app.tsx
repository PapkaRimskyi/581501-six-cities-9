import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

import { changeCitySpots } from '../../store/actions/city-actions/city-actions';

import Header from '../header/header';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import sortCitySpots from '../../util/sort-city-spots';

import ROUTES_PATHS from './routes-paths';
import PAGE_MODIFICATION from './page-modification';

const definePageContainerModificator = (path: string) => {
  switch(path) {
    case ROUTES_PATHS.MAIN:
      return PAGE_MODIFICATION.MAIN;
    case ROUTES_PATHS.LOGIN:
      return PAGE_MODIFICATION.LOGIN;
    default:
      return '';
  }
};

function App(): JSX.Element {
  const { pathname } = useLocation();
  const { city, citySpots } = useAppSelector((state) => state.cityData);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const isAuthorized = true;

  // запрос спотов после изменения города

  useEffect(() => {
    dispatch(changeCitySpots(citySpots));
  }, [city]);

  //

  useEffect(() => {
    const sortedCitySpots = sortCitySpots(sortType, citySpots);
    dispatch(changeCitySpots(sortedCitySpots));
  }, [sortType]);

  return (
    <div className={`page ${definePageContainerModificator(pathname)}`}>
      <Header isAuthorized={isAuthorized} />
      <Routes>
        <Route path={ROUTES_PATHS.MAIN} element={<Main citySpots={citySpots} sortType={sortType} />} />
        <Route path={ROUTES_PATHS.LOGIN} element={<Login />} />
        <Route
          path={ROUTES_PATHS.FAVORITES}
          element={(
            <PrivateRoute isAuthorized={isAuthorized}>
              <Favorites favoritesCards={citySpots} />
            </PrivateRoute>
          )}
        />
        <Route path={ROUTES_PATHS.ROOM} element={<Property citySpots={citySpots} />} />
        <Route path={ROUTES_PATHS.ANYTHING} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
