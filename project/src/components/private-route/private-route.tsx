import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import ROUTES_PATHS from '../../const/routes-paths';
import AUTH_STATUS from '../../const/auth-status';

type PrivateRouteProps = PropsWithChildren<{ isAuthorized: AUTH_STATUS }>;

function PrivateRoute({ isAuthorized, children }: PrivateRouteProps) {
  return (
    <div>
      {isAuthorized === AUTH_STATUS.AUTHORIZED ? children : <Navigate to={ROUTES_PATHS.LOGIN} />}
    </div>
  );
}

export default PrivateRoute;
