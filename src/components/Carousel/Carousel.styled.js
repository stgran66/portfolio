import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* background: linear-gradient(
    to bottom,
    ${(props) => props.theme.background} 0%,
    ${(props) => props.theme.surface} 100%
  ); */

  z-index: 0;
  img {
    width: 64px;
    height: 64px;
  }
`;
