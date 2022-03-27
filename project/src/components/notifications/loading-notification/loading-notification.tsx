import { CSSProperties } from 'react';

const containerStyle: CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  backgroundColor: 'rgba(255, 255, 255, .5)',
  zIndex: '9999',
};

function LoadingNotification() {
  return (
    <div style={containerStyle}>
      <span>Loading...</span>
    </div>
  );
}

export default LoadingNotification;
