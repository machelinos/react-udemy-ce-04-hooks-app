import { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavyMethod = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('iteration')
  }

  return `Iterations done: ${iterations}`
}

export const MemoHook = () => {
  const { count, handleAdd } = useCounter(4000)
  const [show, setShow] = useState(false)

  const heavyMemorized = useMemo(() => heavyMethod(count), [count])
  return (
    <>
      <h1>Memorize</h1>

      <h2>
        Counter: <small>{count}</small>
      </h2>
      <hr />

      <h3>{heavyMemorized}</h3>

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
