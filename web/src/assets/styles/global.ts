import { createGlobalStyle } from 'styled-components';
import { dark } from './colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: ${dark};
    -webkit-font-smoothing: antialiased;
    margin: 1em;
    min-height: 100%;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;