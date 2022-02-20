import { BrowserRouter as Router } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import App from './app';

const ARENDA_OFFER_DATA = [0, 1, 2, 3, 4];

test('Renders app-component', () => {
  render(<Router><App arendaOfferData={ARENDA_OFFER_DATA} /></Router>);
  const textElement = screen.getByText(/5 places to stay in Amsterdam/i);
  expect(textElement).toBeInTheDocument();
});
