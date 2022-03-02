import { PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';

import ROUTES_PATHS from '../app/routes-paths';

type PrivateRouteProps = PropsWithChildren<{ authStatus: boolean }>

function PrivateRoute({ authStatus, children }: PrivateRouteProps) {
  return (
    <div>
      {authStatus ? children : <Navigate to={ROUTES_PATHS.LOGIN}/>}
    </div>
  );
}

export default PrivateRoute;
