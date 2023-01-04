import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

import { Container } from './Todo.styled';
import { ReactComponent as DeleteIcon } from '../assets/svgs/icon-cross.svg';

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);

  // delete task handler
  function deleteTodoHandler(id) {
    // delete todo from server
    fetch(`https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`,
      { method: "DELETE" }
    )

    // delete todo from ui
    setTodos(todos.filter(task => task.id !== id));
  }

  // toggle complete task handler
  function toggleCompleteTask(id) {
    // fetch target task from server
    fetch(`https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`).then(res => res.json())
      .then(targetTask => {
        // update target task
        return { ...targetTask, done: !targetTask.done }
      })
      .then(updatedTask => {
        // update target task (server)
        return fetch(`https://todo-app-881d2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks/${id}.json`, {
          method: "PUT",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(updatedTask)
        }).then(res => res.json())
      })
      .then(data => {
        // update todos (UI)
        setTodos(todos.map(task => (task.id === id) ? { ...task, done: data.done } : task));
      })
  }

  return (
    <Container isDone={todo.done} >
      <input type="checkbox" name="done" defaultChecked={todo.done} onChange={() => toggleCompleteTask(todo.id)} />
      <p>{todo.task}</p>
      <button onClick={() => deleteTodoHandler(todo.id)}>
        <DeleteIcon />
      </button>
    </Container>
  )
}

export default Todo