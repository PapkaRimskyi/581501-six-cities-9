import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';

import offersMocks from "./mocks/offers";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App arendaOfferData={offersMocks} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'));
