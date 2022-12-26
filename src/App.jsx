import { useState } from "react";

import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Footer from "./components/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, themes } from "./global.styled";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const themeToggler = event => setTheme((event.target.checked) ? themes.dark : themes.light);

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Doctor's Appointement",
      done: false
    },
    {
      id: 2,
      task: "Job Interview",
      done: false
    },
    {
      id: 3,
      task: "Drive wifey to work",
      done: true
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header themeToggler={themeToggler} />
      <TodoContainer todos={todos} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
