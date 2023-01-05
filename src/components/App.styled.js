import styled from 'styled-components';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;

  @media (max-width: 480px) {
    width: 95%;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    width: 480px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 768px;
  }

  @media (min-width: 1201px) {
    width: 1200px;
  }
`;
