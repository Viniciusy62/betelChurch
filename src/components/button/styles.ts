import styled from "styled-components";

export const Container = styled.button`
  padding: .5rem 1rem;
  
  background-color: ${({ theme }) => theme.COLORS.ORANGE_500};
  color: ${({ theme }) => theme.COLORS.GRAY_950};
  font-weight: bold;
  
  border: .1rem solid ${({ theme }) => theme.COLORS.GRAY_950};
  border-radius: 0.2em;
  box-shadow: .1rem .1rem .1rem .1rem ${({ theme }) => theme.COLORS.GRAY_950};
  
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.ORANGE_600};
    box-shadow: .1rem .1rem .1rem .1rem ${({ theme }) => theme.COLORS.GRAY_950};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
