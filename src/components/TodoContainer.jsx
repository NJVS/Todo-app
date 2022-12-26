import AddTodo from './AddTodo';
import Todo from './Todo';

import { Container, TodoControlls } from "./TodoContainer.styled";

const TodoContainer = ({ todos }) => {
  return (
    <Container>
      <AddTodo />
      <ul>
        {
          todos.map(todo => (
            <Todo key={todo.id} task={todo.task} done={todo.done} />
          ))
        }
      </ul>
      <TodoControlls noTask={todos.length == 0}>
        <p><span>{todos.length}</span> items left</p>
        <ul>
          <li>
            <input type="radio" name="todotab" id="rd_showAll" defaultChecked />
            <label htmlFor="rd_showAll">All</label>
          </li>
          <li>
            <input type="radio" name="todotab" id="rd_showActive" />
            <label htmlFor="rd_showActive">Active</label>
          </li>
          <li>
            <input type="radio" name="todotab" id="rd_showCompleted" />
            <label htmlFor="rd_showCompleted">Completed</label>
          </li>
        </ul>
        <button>Clear Completed</button>
      </TodoControlls>
    </Container >
  )
}

export default TodoContainer