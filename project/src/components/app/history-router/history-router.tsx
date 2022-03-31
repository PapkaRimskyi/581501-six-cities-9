import React, { useLayoutEffect, useState } from 'react';
import { BrowserHistory, createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

type HistoryRouterType = {
  basename?: string,
  history: BrowserHistory,
  children?: React.ReactNode,
}

export const browserHistory = createBrowserHistory();

export function HistoryRouter({ basename, history, children }: HistoryRouterType) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
