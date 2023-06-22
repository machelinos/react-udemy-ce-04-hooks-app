import { render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { routesConfig } from '../../src/routes/routesConfig'

describe('<MainApp /> tests', () => {
  test('should load the <HomePage /> component', () => {
    const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] })
    render(<RouterProvider router={router} />)

    expect(screen.getByText('Home Page')).toBeTruthy()
  })

  test('should load the <Login /> component', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/login'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText('Login Page')).toBeTruthy()
  })
})
