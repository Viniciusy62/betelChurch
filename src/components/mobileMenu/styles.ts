import { styled } from "styled-components";

export const ButtonMobileStyle = styled.div`
  > button, button:hover {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  > button:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #222;
  opacity: 0.95;
    
  > button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    
    cursor: pointer;
  }

  > button:hover {
    background-color: transparent;
    transform: scale(1.1);
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }

`;
