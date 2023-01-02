import { useState, useEffect, createContext, useMemo } from "react"

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json')
      .then(res => res.json())
      .then(data => {
        const _tasks = [];

        Object.entries(data).forEach(item => {
          _tasks.push({ id: item[0], ...item[1] });
        })
        console.log('fetch rerender')

        setTodos(_tasks);
      })
  }, []);

  const providerVal = useMemo(() => ({ todos, setTodos }), [todos, setTodos]);

  return <TodoContext.Provider value={providerVal}>{children}</TodoContext.Provider>
}
