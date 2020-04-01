import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Repository Explorer/i);
  expect(header).toBeInTheDocument();
});

test('renders the org search input', () => {
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Enter an organization to see their repositories/i);
  expect(input).toBeInTheDocument();
});
