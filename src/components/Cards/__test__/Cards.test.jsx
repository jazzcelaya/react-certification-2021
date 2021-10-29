import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Cards from '../Cards.component';
import { testingMock } from '../mock.data';

afterEach(() => {
  cleanup();
});

test('renders Cards component without crashing', () => {
  render(<Cards />);
  const cardsElement = screen.getByTestId('cards');
  expect(cardsElement).toBeInTheDocument();
});

test('renders Welcome title', () => {
  render(<Cards />);
  const cardsElement = screen.getByTestId('welcome-header');
  expect(cardsElement).toHaveTextContent('Welcome to the Challenge!');
});

test('renders mock data when no props are passed', () => {
  render(<Cards />);
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(25);
});

test('renders mock data when props are undefined', () => {
  render(<Cards items={undefined} />);
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(25);
});

test('renders mock data when props are null', () => {
  render(<Cards items={null} />);
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(25);
});

test('renders no cards when props array is empty', () => {
  render(<Cards items={[]} />);
  const cardsElements = screen.queryByTestId('card');
  expect(cardsElements).not.toBeInTheDocument();
});

test('renders card with passed props', () => {
  const testData = testingMock;
  render(<Cards items={testData} />);
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(1);
});
