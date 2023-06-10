import { useState } from 'react'

export const CounterApp = () => {
  const [{ count1, count2, count3 }, setCount] = useState({
    count1: 10,
    count2: 20,
    count3: 30,
  })
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter1: {count1}</h2>
      <h2>Counter2: {count2}</h2>
      <h2>Counter3: {count3}</h2>

      <button
        className="btn btn-primary"
        onClick={() => {
          setCount({ count1: count1 + 1, count2, count3 })
        }}
      >
        +1 to Counter1
      </button>
    </div>
  )
}
