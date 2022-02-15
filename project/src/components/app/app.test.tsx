import {render, screen} from '@testing-library/react';
import App from './app';

const ARENDA_OFFER_DATA = [0, 1, 2, 3, 4];

test('Renders app-component', () => {
  render(<App arendaOfferData={ARENDA_OFFER_DATA} />);
  const textElement = screen.getByText(/5 places to stay in Amsterdam/i);
  expect(textElement).toBeInTheDocument();
});
