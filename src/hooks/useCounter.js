import { useState } from 'react'

export const useCounter = (initialValue = 10, step = 1) => {
  const [count, setCount] = useState(initialValue)

  const handleAdd = () => {
    setCount(count + step)
  }

  const handleReset = () => {
    setCount(initialValue)
  }

  const handleSubstract = () => {
    setCount(count - step)
  }

  return {
    count,
    handleAdd,
    handleReset,
    handleSubstract,
  }
}
