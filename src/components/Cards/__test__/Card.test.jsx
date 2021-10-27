import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Card from '../Card.component';

afterEach(() => {
  cleanup();
});

test('renders single Card without crashing', () => {
  render(<Card />);
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeInTheDocument();
});

test('passes description and title props', () => {
  render(<Card title="test title" description="test description" />);
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toHaveTextContent('test title');
  expect(cardElement).toHaveTextContent('test description');
});

test('handles undefined props', () => {
  render(<Card />);
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeDefined();
});
