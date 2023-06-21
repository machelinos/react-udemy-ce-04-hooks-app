import { todoReducer } from '../../src/09-useReducer'

describe('todoReducer tests', () => {
  const initialState = [
    {
      id: 1,
      description: 'Todo new',
      done: false,
    },
  ]

  test('should return the initial state', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('should add a new Todo', () => {
    const newTodo = {
      id: 2,
      description: 'Todo 2',
      done: false,
    }
    const newState = todoReducer(initialState, {
      type: '[TODO] Add Todo',
      payload: newTodo,
    })
    expect(newState.length).toBe(2)
    expect(newState).toContain(newTodo)
  })

  test('should delete a todo', () => {
    const newState = todoReducer(initialState, {
      type: '[TODO] Delete Todo',
      payload: 1,
    })
    expect(newState.length).toBe(0)
  })

  test('should toggle the todo done parameter', () => {
    const newState = todoReducer(initialState, {
      type: '[TODO] Toggle Todo',
      payload: 1,
    })
    expect(newState[0].done).toBeTruthy()
  })
})
