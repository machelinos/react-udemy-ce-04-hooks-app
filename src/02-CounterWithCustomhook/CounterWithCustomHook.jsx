import { useCounter } from '../hooks/useCounter'

const step = 2

export const CounterWithCustomHook = () => {
  const { count, handleAdd, handleReset, handleSubstract } = useCounter(0, step)
  return (
    <>
      <h1>Counter with custom hook</h1>

      <h2>Count: {count}</h2>

      <button className="btn btn-primary" onClick={handleAdd}>
        +{step}
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={handleSubstract}>
        -{step}
      </button>
    </>
  )
}
