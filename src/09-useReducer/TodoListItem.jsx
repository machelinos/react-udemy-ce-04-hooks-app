import PropTypes from 'prop-types'

export const TodoListItem = ({ todo, onTodoDelete, onTodoToggle }) => {
  const handleDeleteClick = (id) => {
    onTodoDelete(id)
  }

  const handleTodoToggle = (id) => {
    onTodoToggle(id)
  }
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="description"
        className={`align-self-center ${
          todo.done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => {
          handleTodoToggle(todo.id)
        }}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          handleDeleteClick(todo.id)
        }}
      >
        Delete
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
  onTodoToggle: PropTypes.func.isRequired,
}
