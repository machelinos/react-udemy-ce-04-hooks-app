import PropTypes from 'prop-types'
import { useForm } from '../hooks'

export const TodoAdd = ({ onAddNewTodo }) => {
  const { add, handleInputChange, handleResetClick } = useForm({ add: '' })

  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (add.length < 3) return

    const newTodo = {
      id: new Date().getTime(),
      description: add,
      done: false,
    }

    onAddNewTodo(newTodo)
    handleResetClick()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="form-control"
        type="text"
        name="add"
        placeholder="What do you want to do?"
        value={add}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Add todo
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onAddNewTodo: PropTypes.func.isRequired,
}
