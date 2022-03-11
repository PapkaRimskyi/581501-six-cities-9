import { BrowserRouter as Router } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import App from './app';

import offersMocks from '../../mocks/offers';

test('Renders app-component', () => {
  render(<Router><App arendaOfferData={offersMocks} /></Router>);
  const textElement = screen.getByText(/4 places to stay in Amsterdam/i);
  expect(textElement).toBeInTheDocument();
});
