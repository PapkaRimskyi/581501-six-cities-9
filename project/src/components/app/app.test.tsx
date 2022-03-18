import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import App from './app';

import store from '../../store/store';

test('Renders app-component', () => {
  render(<Router><Provider store={store}><App /></Provider></Router>);
  const textElement = screen.getByText(/4 places to stay in Amsterdam/i);
  expect(textElement).toBeInTheDocument();
});
