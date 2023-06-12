import { useCallback, useState } from 'react'
import { ShowAddBtn } from './ShowAddBtn'

export const CallbackHook = () => {
  const [count, setCount] = useState(0)

  const handleAddCallback = useCallback(() => {
    setCount((value) => value + 1)
  }, [])
  return (
    <>
      <h1>useCallback Hook</h1>
      <hr />

      <h2>Counter: {count}</h2>

      <ShowAddBtn handleAdd={handleAddCallback} />
    </>
  )
}
