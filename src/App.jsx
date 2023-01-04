import { useState } from "react";

import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Footer from "./components/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, themes } from "./global.styled";
import { TodoProvider } from "./contexts/TodoProvider";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const themeToggler = event => setTheme((event.target.checked) ? themes.dark : themes.light);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header themeToggler={themeToggler} />
      <TodoProvider>
        <TodoContainer />
      </TodoProvider>
      <Footer />
    </ThemeProvider>
  )
}

export default App;
