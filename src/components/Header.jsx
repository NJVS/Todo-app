import { ReactComponent as SunIcon } from "../assets/svgs/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/svgs/icon-moon.svg";
import { Container } from "./Header.styled";
import { useTheme } from "styled-components";

const Header = ({ themeToggler }) => {
  const theme = useTheme();

  return (
    <Container>
      <h1>Todo</h1>
      <label htmlFor="inp_themeswitcher">
        <input type="checkbox" name="themeswitcher" id="inp_themeswitcher" onChange={themeToggler} />
        {
          theme.id === 'light'
            ? <MoonIcon />
            : <SunIcon />
        }
      </label>
    </Container>
  )
}

export default Header