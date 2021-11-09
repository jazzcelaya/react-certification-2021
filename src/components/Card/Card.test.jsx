import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card.component';

afterEach(() => {
  cleanup();
});

test('renders single Card without crashing', () => {
  render(
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeInTheDocument();
});

test('passes description and title props', () => {
  render(
    <BrowserRouter>
      <Card title="test title" description="test description" />
    </BrowserRouter>
  );
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toHaveTextContent('test title');
  expect(cardElement).toHaveTextContent('test description');
});

test('handles undefined props', () => {
  render(
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeDefined();
});
