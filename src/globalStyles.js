// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.surface};
    color: ${(props) => props.theme.text};
        text-shadow: 0 0 1px #c8c8c8;

    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.fontSize};
    line-height: ${(props) => props.theme.lineHeight};
    margin: 0;
  }
`;

export default GlobalStyles;
