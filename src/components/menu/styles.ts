import { styled } from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.nav`
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

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}px) {
    ul {
      margin-top: 0;
      padding: 0;
      flex-direction: row;
      gap: 4rem;
    }
  }
`