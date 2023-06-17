import { useReducer } from 'react'
import { todoReducer, TodoList, TodoAdd } from './'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Watch Succession',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Watch Buffy',
    done: false,
  },
]
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleAddNewTodo = (todo) => {
    const addTodoAction = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    dispatch(addTodoAction)
  }

  return (
    <>
      <h1>Todos: 10, Pending: 2</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <TodoAdd onAddNewTodo={handleAddNewTodo} />
        </div>
      </div>
    </>
  )
}
