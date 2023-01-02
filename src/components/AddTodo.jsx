import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoProvider";

import { Container } from "./AddTodo.styled";

const AddTodo = ({ addNewTodo }) => {
  const { setTodos } = useContext(TodoContext);
  const [task, setTask] = useState('');
  const [done, setDone] = useState(false);

  // add new todo handler
  async function addNewTodo(event) {
    event.preventDefault();

    // todo task is required
    if (task === '') return;

    const newTodo = { done, task };

    // add new todo (server)
    fetch('https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTodo)
    }).then(res => res.json())
      .then(data => {
        // add new todo (UI)
        setTodos(prevState => {
          return [...prevState, { id: data.name, ...newTodo }]
        });

        // reset inputs
        setTask('');
        setDone(false);
      })
  }

  return (
    <Container onSubmit={addNewTodo}>
      <input type="checkbox" name="done"
        checked={done}
        onChange={(event) => setDone(event.target.checked)}
      />
      <input type="text" name="task" placeholder="Create a new todo..." autoComplete="off"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
    </Container>
  )
}

export default AddTodo