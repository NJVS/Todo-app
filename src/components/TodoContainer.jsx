import { useContext, useState, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

import AddTodo from './AddTodo';
import Todo from './Todo';

import { Container, TodoControlls } from "./TodoContainer.styled";

const TodoContainer = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [filter, setFilter] = useState('all');
  const [filtered, setFiltered] = useState([]);

  function filterHandler(event) {
    setFilter(event.target.value);
  }

  function deleteCompleteTasksHandler() {
    const incTaskIds = todos.filter(todo => todo.done === true).map(todo => todo.id);
    // from storage
    incTaskIds.forEach(id => {
      fetch(`https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`,
        { method: 'DELETE' }
      )
    })
    // from UI
    setTodos(todos.filter(todo => todo.done === false));
  }

  useEffect(() => {
    const toDisplay = (filter === 'active') ? todos.filter(todo => todo.done === false) :
      (filter === 'completed') ? todos.filter(todo => todo.done === true) : todos;

    setFiltered(toDisplay);
  }, [filter, todos]);

  return (
    <Container>
      <AddTodo />
      <ul>
        {
          filtered.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))
        }
      </ul>
      <TodoControlls noTask={filtered.length == 0}>
        <p><span>{filtered.length}</span> items left</p>
        <ul>
          <li>
            <input type="radio" name="todotab" id="rd_showAll" value="all" onChange={filterHandler} defaultChecked />
            <label htmlFor="rd_showAll">All</label>
          </li>
          <li>
            <input type="radio" name="todotab" id="rd_showActive" value="active" onChange={filterHandler} />
            <label htmlFor="rd_showActive">Active</label>
          </li>
          <li>
            <input type="radio" name="todotab" id="rd_showCompleted" value="completed" onChange={filterHandler} />
            <label htmlFor="rd_showCompleted">Completed</label>
          </li>
        </ul>
        <button onClick={() => deleteCompleteTasksHandler()}>Clear Completed</button>
      </TodoControlls>
    </Container >
  )
}

export default TodoContainer