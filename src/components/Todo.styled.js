import styled from "styled-components";
import CheckIcon from '../assets/svgs/icon-check.svg';

export const Container = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 0.375rem;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: none;
  }

  input[type=checkbox] {
    all: unset;
    display: grid;
    place-items: center;
    width: 21px;
    aspect-ratio: 1/1;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;

    &::after {
      content: url(${CheckIcon});
      opacity: 0;
      rotate: -35deg;
      transition: rotate 0.3s ease;
    }

    &:hover:not(:checked) {
      border-color: ${({ theme }) => theme.borderActive};
    }

    &:checked {
      background: var(--c-gradient-background);
      &::after {
        opacity: 1;
        rotate: 0deg;
      }
    }

    &:focus {
      border-color: var(--c-blue-400);
      box-shadow: 0 0 0 4px var(--c-focus-shadow);
    }
  }

  p {
    flex-grow: 1;
    margin-left: 1rem;
    color: ${({ theme, isDone }) => (isDone) ? theme.textMuted : theme.text};
    font-size: 1.125rem;
    ${({ isDone }) => (isDone) && 'text-decoration: line-through;'};
  }

  &:hover button {
    opacity: 1;
    visibility: visible;
  }

  button {
    display: grid;
    place-items: center;
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    transition: all 0.3s ease;
    outline: none;
    cursor: pointer;

    opacity: 0;
    visibility: hidden;

    &:focus {
      border-color: var(--c-blue-400);
      box-shadow: 0 0 0 4px var(--c-focus-shadow);
    }
  }
`;