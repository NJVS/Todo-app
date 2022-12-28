import { useState, useEffect } from "react";

import Header from "./components/Header";
import TodoContainer from "./components/TodoContainer";
import Footer from "./components/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, themes } from "./global.styled";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const themeToggler = event => setTheme((event.target.checked) ? themes.dark : themes.light);

  const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState({});

  // get tasks
  useEffect(() => {
    fetch('https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json')
      .then(res => res.json())
      .then(data => {
        const _tasks = [];

        Object.entries(data).forEach(item => {
          const reconstruct = { id: item[0], ...item[1] }
          _tasks.push(reconstruct);
        })
        setTasks(_tasks);
      })
  }, []);

  // delete task
  const deleteTask = async (id) => {
    fetch(
      `https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`,
      {
        method: 'DELETE'
      }
    );

    setTasks(tasks.filter(task => task.id !== id));
  }
  // add new task
  const addNewTodo = async task => {
    const id = await fetch('https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(task)
      }
    ).then(res => res.json());

    setTasks(prevState => {
      return [...prevState, { id: id.name, ...task }];
    })
  }
  // 

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header themeToggler={themeToggler} />
      <TodoContainer todos={tasks} deleteTask={deleteTask} addNewTodo={addNewTodo} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
