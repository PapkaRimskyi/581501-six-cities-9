import { Route, Routes, useLocation } from 'react-router-dom';

import Header from '../header/header';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';

import PrivateRoute from '../private-route/private-route';

import ROUTES_PATHS from './routes-paths';
import PAGE_MODIFICATION from './page-modification';

import OfferType from '../../types/offerType';

type AppProps = {
  arendaOfferData: OfferType[],
};

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

function App({ arendaOfferData }: AppProps): JSX.Element {
  const { pathname } = useLocation();

  const isAuthorized = true;

  return (
    <div className={`page ${definePageContainerModificator(pathname)}`}>
      <Header isAuthorized={isAuthorized} />
      <Routes>
        <Route path={ROUTES_PATHS.MAIN} element={<Main arendaOfferData={arendaOfferData} />} />
        <Route path={ROUTES_PATHS.LOGIN} element={<Login />} />
        <Route
          path={ROUTES_PATHS.FAVORITES}
          element={(
            <PrivateRoute isAuthorized={isAuthorized}>
              <Favorites favoritesCards={arendaOfferData} />
            </PrivateRoute>
          )}
        />
        <Route path={ROUTES_PATHS.ROOM} element={<Property />} />
        <Route path={ROUTES_PATHS.ANYTHING} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
