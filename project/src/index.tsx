import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';

const ARENDA_OFFER_DATA = [0, 1, 2, 3, 4];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App arendaOfferData={ARENDA_OFFER_DATA} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));
