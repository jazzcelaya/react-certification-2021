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
  const testData = [
    {
      kind: 'youtube#searchResult',
      etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
      id: {
        kind: 'youtube#channel',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      },
      snippet: {
        publishedAt: '2014-09-27T01:39:18Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline',
        description:
          "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
        thumbnails: {
          default: {
            url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
          },
          medium: {
            url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
          },
          high: {
            url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'upcoming',
        publishTime: '2014-09-27T01:39:18Z',
      },
    },
  ];
  render(<Cards items={testData} />);
  const cardsElements = screen.getAllByTestId('card');
  expect(cardsElements.length).toBe(1);
});
