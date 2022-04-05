import { Link } from 'react-router-dom';

import { containerStyle, errorTextStyle } from './style';

import ROUTES_PATHS from '../../const/routes-paths';

function NotFound() {
  return (
    <div style={containerStyle}>
      <div style={errorTextStyle}>404</div>
      <Link to={ROUTES_PATHS.MAIN}>На главную</Link>
    </div>
  );
}

export default NotFound;
