import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { getDefaultSpotsAction } from './store/actions/city-actions/city-actions';
// import { checkAuthStatus } from './store/actions/auth-actions/auth-actions';

import App from './components/app/app';

import store from './store/store';

store.dispatch(getDefaultSpotsAction());
// store.dispatch(checkAuthStatus());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
