import styled from "styled-components";

export const Container = styled.footer`
  padding: 1rem 0;
  text-align: center;
  font-size: 0.875rem;
  
  p {
    color: ${({ theme }) => theme.textMuted};

    a {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: var(--c-blue-400);
      }
    }
  }
`