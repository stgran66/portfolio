import styled from 'styled-components';

export const StyledMain = styled.main`
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    min-height: 110px;

    color: ${(props) => props.theme.text};
    font: 1.3rem Inconsolata, monospace;

    i {
      font-style: normal;
      color: ${(props) => props.theme.highlight};
    }

    @media screen and (max-width: 480px) {
      min-height: 192px;
    }
  }
`;
