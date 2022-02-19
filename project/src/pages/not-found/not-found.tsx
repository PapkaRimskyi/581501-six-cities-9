import { Link } from 'react-router-dom';

const containerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const errorTextStyle = {
  marginBottom: '15px',
  fontSize: '24px',
  lineHeight: '28px',
  color: 'black',
};

function NotFound() {
  return (
    <div style={containerStyle as React.CSSProperties}>
      <div style={errorTextStyle}>404</div>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFound;
