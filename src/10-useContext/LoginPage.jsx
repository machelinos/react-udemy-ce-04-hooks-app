import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>Login Page {user.name}</h1>
      <hr />

      <pre>{JSON.stringify(user)}</pre>

      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({
            name: 'otheruser',
            email: 'yo@email.com',
            id: 12342,
          })
        }}
      >
        Set user
      </button>
    </>
  )
}
