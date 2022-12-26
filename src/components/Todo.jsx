import React from 'react';

import { Container, DeleteTask } from './Todo.styled';
import { ReactComponent as DeleteIcon } from '../assets/svgs/icon-cross.svg';

const Todo = ({ task, done }) => {
  return (
    <Container>
      <input type="checkbox" name="done" defaultChecked={done} />
      <p>{task}</p>
      <DeleteTask />
    </Container>
  )
}

export default Todo