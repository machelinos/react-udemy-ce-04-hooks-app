import PropTypes from 'prop-types'
import { TodoListItem } from './'

export const TodoList = ({ todos, onTodoDelete, onTodoToggle }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onTodoDelete={onTodoDelete}
          onTodoToggle={onTodoToggle}
        />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoToggle: PropTypes.func.isRequired,
}
