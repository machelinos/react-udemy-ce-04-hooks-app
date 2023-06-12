import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
  const { count, handleAdd } = useCounter(10)

  const [show, setShow] = useState(false)
  return (
    <>
      <h1>Memorize</h1>

      <h2>
        Counter: <Small value={count} />
      </h2>

      <button className="btn btn-primary" onClick={handleAdd}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  )
}
