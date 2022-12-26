import { Container } from "./AddTodo.styled"

const AddTodo = () => {
  return (
    <Container>
      <input type="checkbox" name="done" />
      <input type="text" name="task" placeholder="Create a new todo..." autoComplete="off" />
    </Container>
  )
}

export default AddTodo