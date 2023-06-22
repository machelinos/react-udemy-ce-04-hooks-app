import { fireEvent, render, screen } from '@testing-library/react'
import { TodoListItem } from '../../src/09-useReducer'

describe('<TodoListItem /> test', () => {
  const todo = {
    id: 1,
    description: 'Test todo',
    done: false,
  }
  const onTodoDeleteMock = jest.fn()
  const onTodoToggleMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('should load the pending todo', () => {
    render(
      <TodoListItem
        todo={todo}
        onTodoDelete={onTodoDeleteMock}
        onTodoToggle={onTodoToggleMock}
      />,
    )

    expect(screen.getByText(todo.description)).toBeTruthy()
  })

  test('should call onTodotoggle with the todo id when clicking the description', () => {
    render(
      <TodoListItem
        todo={todo}
        onTodoDelete={onTodoDeleteMock}
        onTodoToggle={onTodoToggleMock}
      />,
    )

    const todoDesc = screen.getByLabelText('description')
    fireEvent.click(todoDesc)
    expect(onTodoToggleMock).toHaveBeenCalled()
    expect(onTodoToggleMock).toHaveBeenCalledWith(todo.id)
  })

  test('should call onTodoDelete with the todo id when clicking the delete button', () => {
    render(
      <TodoListItem
        todo={todo}
        onTodoDelete={onTodoDeleteMock}
        onTodoToggle={onTodoToggleMock}
      />,
    )

    const deleteBtn = screen.getByRole('button')
    fireEvent.click(deleteBtn)
    expect(onTodoDeleteMock).toHaveBeenCalled()
    expect(onTodoDeleteMock).toHaveBeenCalledWith(todo.id)
  })
})
