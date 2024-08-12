import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }

  body, input, button, textarea {
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.6rem;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  p {
    line-height: 1.5;
  }
`;
