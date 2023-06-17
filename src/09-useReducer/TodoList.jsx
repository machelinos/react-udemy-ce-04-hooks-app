import PropTypes from 'prop-types'
import { TodoListItem } from './'

export const TodoList = ({ todos, onTodoDelete }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onTodoDelete={onTodoDelete} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
}
