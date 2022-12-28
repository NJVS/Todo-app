import { useState } from "react";
import { Container } from "./AddTodo.styled";

const AddTodo = ({ addNewTodo }) => {

  const [task, setTask] = useState('');
  const [done, setDone] = useState(false);

  const submitHandler = event => {
    event.preventDefault();

    if (task === '') return;

    addNewTodo({ done, task });

    // reset
    setTask('');
    setDone(false);
  }

  return (
    <Container onSubmit={submitHandler}>
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