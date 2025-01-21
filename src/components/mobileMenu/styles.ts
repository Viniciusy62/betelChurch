import { styled } from "styled-components";

export const ContainerBtn = styled.div`
  > button, button:hover {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  > button:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }
`;

export const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #222;
  opacity: 0.95;
  transition: margin-top 2s ease-out;
    
  ul {
    margin-top: 4.4rem;
    list-style: none;
    
    padding: 2rem;
    
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 2rem;
  }
  
  a {
    text-decoration: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
  }

  a::after {
    content: "";

    display: block;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE_500};
    
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.2s ease-out;
  }

  a:active::after {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  a:hover::after,
  a:focus::after,
  a:hover {
    transform-origin: left top;
    transform: scale(1, 1);
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
  }

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
