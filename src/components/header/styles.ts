import styled from "styled-components";

export const Container = styled.header`
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.6rem;

  background-color: #111111;
  width: 100%;

  img {
    width: clamp(3rem, 4rem, 6rem);
  }
`;
