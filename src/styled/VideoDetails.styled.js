import styled from 'styled-components';

export const StyledVideoDetails = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-top: 54px;

  .video-container {
    width: 70%;
  }

  iframe {
    height: 500px;
    width: 100%;
    border-width: 2px;
  }
`;

export const StyledRecommendedBar = styled.div`
  width: 30%;
  flex-direction: column;
`;
