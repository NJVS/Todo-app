import styled from "styled-components";
import { ReactComponent as SunIcon } from "../assets/svgs/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/svgs/icon-moon.svg";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 2rem;

  h1 {
    color: var(--c-white-100);
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.875rem;
  }

  input[type=checkbox] {
    display: none;
  }

  label {
    cursor: pointer;
  }
`;
