import PropTypes from 'prop-types'

export const TodoListItem = ({ todo, onTodoDelete }) => {
  const handleDeleteClick = (id) => {
    onTodoDelete(id)
  }
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.description}</span>
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
}
