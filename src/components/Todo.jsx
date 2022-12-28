import React from 'react';

import { Container, DeleteTask } from './Todo.styled';
import { ReactComponent as DeleteIcon } from '../assets/svgs/icon-cross.svg';

const Todo = ({ todo, deleteTask }) => {
  return (
    <Container>
      <input type="checkbox" name="done" defaultChecked={todo.done} />
      <p>{todo.task}</p>
      <button onClick={() => deleteTask(todo.id)}>
        <DeleteIcon />
      </button>
    </Container>
  )
}

export default Todo