import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routesConfig } from './routes/routesConfig'
import './index.css'

const router = createBrowserRouter(routesConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RouterProvider router={router} />,
  //</React.StrictMode>,
)
