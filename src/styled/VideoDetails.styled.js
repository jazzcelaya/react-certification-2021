import styled from 'styled-components';

export const StyledVideoDetails = styled.div`
  display: flex;
  position: relative;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  flex-direction: row;
  width: 100%;
  margin-top: 54px;
  overflow: auto;
  background-color: ${(props) => props.theme.backgroundColor};

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
    color: ${(props) => props.theme.color};
  }

  p {
    color: ${(props) => props.theme.detailsColor};
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
    color: ${(props) => props.theme.color};
  }

  img {
    width: 120px;
    height: 90px;
    object-fit: cover;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    color: ${(props) => props.theme.color};
  }
`;
