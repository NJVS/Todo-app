import styled from "styled-components";

export const Container = styled.main`
  flex-grow: 1;

  > ul {
    background-color: ${({ theme }) => theme.mainBackground};
    border-radius: 6px 6px 0 0;
  }
`

export const TodoControlls = styled.section`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.mainBackground};
  border-radius: ${({ noTask }) => noTask ? '6px' : '0 0 6px 6px'};
  font-size: 0.875rem;

  ul {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    li {
      input[type=radio] {
        display: none;

        &:checked ~ label {
          color: var(--c-blue-400);
        }
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
  }
`