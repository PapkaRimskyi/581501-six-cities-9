import { PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';

import ROUTES_PATHS from '../app/routes-paths';

type PrivateRouteProps = PropsWithChildren<{ isAuthorized: boolean }>

function PrivateRoute({ isAuthorized, children }: PrivateRouteProps) {
  return (
    <div>
      {isAuthorized ? children : <Navigate to={ROUTES_PATHS.LOGIN}/>}
    </div>
  );
}

export default PrivateRoute;
