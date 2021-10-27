import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Cards from '../Cards.component';

afterEach(() => {
  cleanup();
});

test('renders Cards component without crashing', () => {
  render(<Cards />);
  const cardsElement = screen.getByTestId('cards');
  expect(cardsElement).toBeInTheDocument();
});

test('renders Welcome tittle', () => {
  render(<Cards />);
  const cardsElement = screen.getByTestId('welcome-header');
  expect(cardsElement).toHaveTextContent('Welcome to the Challenge!');
});
