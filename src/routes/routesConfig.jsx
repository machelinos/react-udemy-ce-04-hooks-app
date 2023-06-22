import { AboutPage } from '../10-useContext/AboutPage'
import { HomePage } from '../10-useContext/Homepage'
import { LoginPage } from '../10-useContext/LoginPage'
import { MainApp } from '../10-useContext/MainApp'

export const routesConfig = [
  {
    path: '/',
    element: <MainApp />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/*',
        element: <LoginPage />,
      },
    ],
  },
]
