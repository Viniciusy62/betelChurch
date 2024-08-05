import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 1.5em;
    height: 1.5em;
  }
  
  h1 {
    font-size: 3em;
  }

  div {
    display: flex;
    gap: 1em;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
