import { fireEvent, render, screen } from '@testing-library/react'
import { LoginPage } from '../../src/10-useContext/LoginPage'
import { UserContext } from '../../src/10-useContext/context/UserContext'

describe('<LoginPage /> tests', () => {
  test('should load the component with no user', () => {
    render(
      <UserContext.Provider value={{ user: { name: null } }}>
        <LoginPage />
      </UserContext.Provider>,
    )
    expect(screen.getByText('{"name":null}')).toBeTruthy()
  })

  test('should load the component with a user', () => {
    const user = { name: 'machelinos', email: 'marcel@email.com' }
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>,
    )
    expect(screen.getByText('machelinos')).toBeTruthy()
    expect(screen.getByLabelText('pre').innerHTML).toBe(JSON.stringify(user))
  })

  test('should call setUser when clicking on the Set user button', () => {
    const user = { id: 1, name: 'machelinos', email: 'marcel@email.com' }
    const setUserMock = jest.fn()
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>,
    )
    const setUserBtn = screen.getByRole('button')
    fireEvent.click(setUserBtn)

    expect(setUserMock).toHaveBeenCalledWith({
      name: 'otheruser',
      email: 'yo@email.com',
      id: 12342,
    })
  })
})
