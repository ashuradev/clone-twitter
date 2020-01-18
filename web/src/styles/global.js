import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: rgb(21, 32, 43);
    font-size: 15px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;
