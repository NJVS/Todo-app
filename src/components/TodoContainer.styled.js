import styled from "styled-components";

export const Container = styled.main`
  flex-grow: 1;

  > ul {
    max-height: 50vh;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.mainBackground};
    border-radius: 6px 6px 0 0;
    transition: background-color 0.3s ease;
  }
`

export const TodoControlls = styled.section`
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.mainBackground};
  border-radius: ${({ noTask }) => noTask ? '6px' : '0 0 6px 6px'};


  font-size: 0.875rem;

  p {
    color: ${({ theme }) => theme.textMuted};
    span {
      color: ${({ theme }) => theme.text};
    }
  }

  ul {
    flex-grow: 1;
    display: flex;
    justify-content: center;

    li {

      label {
        cursor: pointer;
        padding: 3px;
        border: 1px solid transparent;
        border-radius: 3px;
        color: ${({ theme }) => theme.textMuted};
        transition: all 0.3s ease;

        &:hover {
          color: ${({ theme }) => theme.text};
        }
      }
      
      input[type=radio] {
        opacity: 0;

        &:focus ~ label {
          border-color: var(--c-blue-400);
          box-shadow: 0 0 0 4px var(--c-focus-shadow);
        }

        &:checked ~ label {
          color: var(--c-blue-400);
        }
      }
    }
  }

  button {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 3px;
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    cursor: pointer;
    outline: none;

    &:focus {
      border-color: var(--c-blue-400);
      box-shadow: 0 0 0 4px var(--c-focus-shadow);
    }
  }
`