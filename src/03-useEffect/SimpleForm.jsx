import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'username',
    email: 'username@email.com',
  })

  const { username, email } = formState

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

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
          placeholder="username"
          value={username}
          onChange={handleInputChange}
        />

        <input
          type="email"
          className="form-control mt-3"
          name="email"
          placeholder="username@email.com"
          value={email}
          onChange={handleInputChange}
        />
      </form>

      {username === 'username' && <Message />}
    </>
  )
}
