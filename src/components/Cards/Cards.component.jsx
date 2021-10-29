import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  StyledCardsContainer,
  StyledCardsGeneralContainer,
  StyledWelcomeHeader,
} from '../../styled/Cards.styled';
import Card from './Card.component';
import { mockData } from './mock.data';

const baseUrl = `https://www.googleapis.com/youtube/v3/search?maxResults=25&key=${process.env.REACT_APP_API_KEY}&part=snippet`;

async function getVideos() {
  try {
    const response = await axios({
      url: baseUrl,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

function Cards() {
  const [items, setItems] = useState(mockData.items);

  useEffect(() => {
    async function loadVideos() {
      const response = await getVideos();
      if (response.status === 200) {
        setItems(response.data.items);
      }
    }
    loadVideos();
  },[]);

  return (
    <StyledCardsGeneralContainer data-testid="cards">
      <StyledWelcomeHeader data-testid="welcome-header">
        Welcome to the Challenge!
      </StyledWelcomeHeader>
      <StyledCardsContainer>
        {items.map((item, i) => {
          const { etag, snippet } = item;
          const { thumbnails, title, description } = snippet;
          const key = etag + i;
          return (
            <Card
              image={thumbnails.high.url}
              description={description}
              title={title}
              key={key}
            />
          );
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Cards;
