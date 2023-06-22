import { render, screen } from '@testing-library/react'
import { useTodos } from '../../src/hooks/useTodos'
import { TodoApp } from '../../src/09-useReducer/TodoApp'
jest.mock('../../src/hooks/useTodos')

describe('<TodoApp /> tests', () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Test #1',
        done: false,
      },
      {
        id: 2,
        description: 'Test #2',
        done: true,
      },
    ],
    todosCount: 2,
    todosPending: 1,
    handleAddNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  })

  test('should load the component', () => {
    render(<TodoApp />)

    expect(screen.getByText('Test #1')).toBeTruthy()
    expect(screen.getByText('Test #2')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
