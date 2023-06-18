import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>
      <Navbar />
      <hr />

      <Outlet />
    </>
  )
}
