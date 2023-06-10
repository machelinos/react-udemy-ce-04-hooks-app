import { useEffect } from 'react'
import { Message } from './Message'
import { useForm } from '../hooks/useForm'

const initialFormState = {
  username: '',
  email: '',
  password: '',
}

export const FormWithCustomHook = () => {
  const {
    username,
    email,
    password,
    formState,
    handleInputChange,
    handleResetClick,
  } = useForm(initialFormState)

  useEffect(() => {
    console.log('useEffect called')
  }, [])

  useEffect(() => {
    console.log('form changed')
  }, [formState])

  useEffect(() => {
    console.log('email changed')
  }, [email])

  return (
    <>
      <form>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Your username..."
          value={username}
          onChange={handleInputChange}
        />

        <input
          type="email"
          className="form-control mt-3"
          name="email"
          placeholder="Your email..."
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className="form-control mt-3"
          name="password"
          placeholder="Password..."
          value={password}
          onChange={handleInputChange}
        />
      </form>

      {username === 'username' && <Message />}

      <button className="btn btn-primary mt-3" onClick={handleResetClick}>
        Reset
      </button>
    </>
  )
}
