import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body, input, button, textarea {
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.6em;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`