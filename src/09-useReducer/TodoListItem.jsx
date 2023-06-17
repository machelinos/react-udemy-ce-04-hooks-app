import PropTypes from 'prop-types'

export const TodoListItem = ({ description }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button className="btn btn-outline-danger">Delete</button>
    </li>
  )
}

TodoListItem.propTypes = {
  description: PropTypes.string.isRequired,
}
