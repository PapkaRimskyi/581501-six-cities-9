import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

import ROUTES_PATHS from '../../const/routes-paths';

const containerStyle: CSSProperties = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const errorTextStyle: CSSProperties = {
  marginBottom: '15px',
  fontSize: '24px',
  lineHeight: '28px',
  color: 'black',
};

function NotFound() {
  return (
    <div style={containerStyle}>
      <div style={errorTextStyle}>404</div>
      <Link to={ROUTES_PATHS.MAIN}>На главную</Link>
    </div>
  );
}

export default NotFound;
