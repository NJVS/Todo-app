import styled from "styled-components";
import CheckIcon from '../assets/svgs/icon-check.svg';

export const Container = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 0.375rem;
  width: 100%;
  margin-bottom: 2.5rem;
  padding: 1.25rem 1rem;
  background-color: ${({ theme }) => theme.mainBackground};
  border-radius: 6px;
  transition: background-color 0.3s ease;

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

  input[type=text] {
    flex-grow: 1;
    display: block;
    padding: 0 0.75rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    font-size: 1.125rem;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.textMuted}
    }
  }
`