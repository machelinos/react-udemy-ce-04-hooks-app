import { useEffect, useReducer } from 'react'
import { todoReducer, TodoList, TodoAdd } from './'

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddNewTodo = (todo) => {
    const addTodoAction = {
      type: '[TODO] Add Todo',
      payload: todo,
    }
    dispatch(addTodoAction)
  }

  const handleDeleteTodo = (id) => {
    const deleteTodoAction = {
      type: '[TODO] Delete Todo',
      payload: id,
    }

    dispatch(deleteTodoAction)
  }

  const handleToggleTodo = (id) => {
    const toggleTodoAction = {
      type: '[TODO] Toggle Todo',
      payload: id,
    }

    dispatch(toggleTodoAction)
  }

  return (
    <>
      <h1>Todos: 10, Pending: 2</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onTodoDelete={handleDeleteTodo}
            onTodoToggle={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <TodoAdd onAddNewTodo={handleAddNewTodo} />
        </div>
      </div>
    </>
  )
}
