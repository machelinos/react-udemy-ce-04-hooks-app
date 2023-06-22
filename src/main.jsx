import ReactDOM from 'react-dom/client'
import { MainApp } from './10-useContext/MainApp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { AboutPage } from './10-useContext/AboutPage'
import { HomePage } from './10-useContext/Homepage'
import { LoginPage } from './10-useContext/LoginPage'
import { MultipleCustomHooks } from './04-examples/MultipleCustomHooks'
import { TodoApp } from './09-useReducer/TodoApp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoApp />,
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RouterProvider router={router} />,
  //</React.StrictMode>,
)
