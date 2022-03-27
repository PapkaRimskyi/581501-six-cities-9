import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import useAppSelector from '../../hooks/use-app-selector';

import Header from '../header/header';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import LoadingNotification from '../notifications/loading-notification/loading-notification';
import PrivateRoute from '../private-route/private-route';

import ROUTES_PATHS from '../../const/routes-paths';
import AUTH_STATUS from '../../const/auth-status';
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
  const { citySpots } = useAppSelector((state) => state.city);
  const favoritesCards = useAppSelector((state) => state.favorites);
  const authorizationStatus = useAppSelector((state) => state.auth.authStatus);

  return (
    <div className={`page ${definePageContainerModificator(pathname)}`}>
      <Header isAuthorized={authorizationStatus} />

      <Routes>
        <Route path={ROUTES_PATHS.MAIN} element={<Main citySpots={citySpots} />} />
        <Route
          path={ROUTES_PATHS.LOGIN}
          element={authorizationStatus !== AUTH_STATUS.AUTHORIZED ? <Login /> : <Navigate to={ROUTES_PATHS.MAIN} replace />}
        />
        <Route
          path={ROUTES_PATHS.FAVORITES}
          element={
            authorizationStatus === AUTH_STATUS.UNKNOWN
              ? <LoadingNotification />
              : (
                <PrivateRoute isAuthorized={authorizationStatus}>
                  <Favorites favoritesCards={favoritesCards} />
                </PrivateRoute>
              )
          }
        />
        <Route path={ROUTES_PATHS.ROOM} element={<Room />} />
        <Route path={ROUTES_PATHS.NOT_FOUND} element={<NotFound />} />
        <Route path={ROUTES_PATHS.ANYTHING} element={<Navigate to={ROUTES_PATHS.NOT_FOUND} replace />} />
      </Routes>
    </div>
  );
}

export default App;
