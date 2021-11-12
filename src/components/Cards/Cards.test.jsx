import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cards from './Cards.component';
import { mockData } from './mock.data';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

test('renders Cards component without crashing', () => {
  render(
    <BrowserRouter>
      <Cards />
    </BrowserRouter>
  );
  const cardsElement = screen.getByTestId('cards');
  expect(cardsElement).toBeInTheDocument();
});

test('renders Welcome title', () => {
  render(
    <BrowserRouter>
      <Cards />
    </BrowserRouter>
  );
  const cardsElement = screen.getByTestId('welcome-header');
  expect(cardsElement).toHaveTextContent('Welcome to the Challenge!');
});

test('renders mock data when no props are passed', () => {
  render(
    <BrowserRouter>
      <Cards />
    </BrowserRouter>
  );
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(25);
});

test('renders mock data when props are undefined', () => {
  render(
    <BrowserRouter>
      <Cards items={undefined} />
    </BrowserRouter>
  );
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(25);
});

test('renders mock data when props are null', () => {
  render(
    <BrowserRouter>
      <Cards items={null} />
    </BrowserRouter>
  );
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(25);
});

test('renders all the mocked amount of item cards when props array is empty', () => {
  render(
    <BrowserRouter>
      <Cards items={[]} />
    </BrowserRouter>
  );
  const cardsElements = screen.queryAllByTestId('card');
  expect(cardsElements.length).toBe(mockData.items.length);
});

test('renders a card per index of payloads array', () => {
  render(
    <BrowserRouter>
      <Cards items={mockData.items[0]} />
    </BrowserRouter>
  );
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(mockData.items.length); // TODO: make this a valid test
});
