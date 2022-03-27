import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { HistoryRouter, browserHistory } from './components/app/history-router/history-router';

import getCitySpots from './store/city/thunk/get-city-spots';
import checkAuthStatus from './store/auth/thunk/check-auth-status';

import App from './components/app/app';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

import store from './store/store';

store.dispatch(getCitySpots());
store.dispatch(checkAuthStatus());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
        <ScrollToTop />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
