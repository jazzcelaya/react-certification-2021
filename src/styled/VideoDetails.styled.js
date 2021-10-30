import styled from 'styled-components';

export const StyledVideoDetails = styled.div`
  display: flex;
  position: relative;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: black;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-top: 54px;
  overflow: scroll;

  .video-container {
    width: 70%;
  }

  iframe {
    height: 500px;
    width: 100%;
    border-width: 2px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
  }

  p {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
`;

export const StyledRecommendedBar = styled.div`
  width: 30%;
  flex-direction: column;

  .recommended-box {
    display: flex;
    flex-direction: row;
    height: 100px;
    overflow: hidden;
    align-items: center;
  }

  img {
    width: 120px;
    height: 90px;
    object-fit: cover;
  }
  p {
    color: black;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
`;
