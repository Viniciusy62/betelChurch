import { styled } from 'styled-components';

export const Container = styled.nav`
  margin: auto;
  max-width: 600px;

  ul {
    display: flex;
    justify-content: space-around;

    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.5em;

    &:hover {
      opacity: 0.7;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE};

      transition: 0.3s ease;
    }
}
`;