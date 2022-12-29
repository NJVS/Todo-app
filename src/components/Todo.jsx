import React from 'react';

import { Container, DeleteTask } from './Todo.styled';
import { ReactComponent as DeleteIcon } from '../assets/svgs/icon-cross.svg';

const Todo = ({ todo, deleteTask, completeTask }) => {
  return (
    <Container>
      <input type="checkbox" name="done" defaultChecked={todo.done} onChange={() => completeTask(todo.id)} />
      <p>{todo.task}</p>
      <button onClick={() => deleteTask(todo.id)}>
        <DeleteIcon />
      </button>
    </Container>
  )
}

export default Todo