import { useEffect, useReducer } from 'react'
import { todoReducer } from '../09-useReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

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

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter((todo) => !todo.done).length,
    handleAddNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
