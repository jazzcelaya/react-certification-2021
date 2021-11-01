import React, { useEffect, useState } from 'react';
import {
  StyledCardsContainer,
  StyledCardsGeneralContainer,
  StyledWelcomeHeader,
} from '../../styled/Cards.styled';
import { getVideos } from '../../utils/services';
import Card from './Card.component';
import { mockData } from './mock.data';

function Cards({ keyword }) {
  const [items, setItems] = useState(mockData.items);

  useEffect(() => {
    async function loadVideos() {
      const response = await getVideos(keyword);
      if (response.status === 200) {
        setItems(response.data.items);
      }
    }
    loadVideos();
  }, [keyword]);

  return (
    <StyledCardsGeneralContainer data-testid="cards">
      <StyledWelcomeHeader data-testid="welcome-header">
        Welcome to the Challenge!
      </StyledWelcomeHeader>
      <StyledCardsContainer>
        {items.map((item, i) => {
          const { etag, snippet, id } = item;
          const { thumbnails, title, description } = snippet;
          const { videoId } = id;
          const key = etag + i;
          return (
            <Card
              image={thumbnails.high.url}
              description={description}
              title={title}
              videoId={videoId}
              key={key}
            />
          );
        })}
      </StyledCardsContainer>
    </StyledCardsGeneralContainer>
  );
}

export default Cards;
