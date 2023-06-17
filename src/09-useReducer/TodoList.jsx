import PropTypes from 'prop-types'
import { TodoListItem } from './'

export const TodoList = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map(({ id, description }) => (
        <TodoListItem key={id} description={description} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}
