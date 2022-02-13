import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const ARENDA_OFFER_DATA = [0, 1, 2, 3, 4];

ReactDOM.render(
  <React.StrictMode>
    <App arendaOfferData={ARENDA_OFFER_DATA} />
  </React.StrictMode>,
  document.getElementById('root'));
