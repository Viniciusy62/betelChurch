import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 50%;
    }
  }
  
  body, input, button, textarea {
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.6rem;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GRAY_950};
    position: relative;
  }

  p {
    line-height: 1.5;
  }
`;
