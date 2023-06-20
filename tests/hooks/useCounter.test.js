import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks'

describe('Tests in useCounter hook', () => {
  test('should return default values', () => {
    const { result } = renderHook(useCounter)

    const { count, handleAdd, handleReset, handleSubstract } = result.current

    expect(count).toBe(10)
    expect(handleAdd).toEqual(expect.any(Function))
    expect(handleReset).toEqual(expect.any(Function))
    expect(handleSubstract).toEqual(expect.any(Function))
  })

  test('should generate counter with 100 value', () => {
    const { result } = renderHook(useCounter, { initialProps: 100 })

    expect(result.current.count).toBe(100)
  })

  test('should increment counter', () => {
    const { result } = renderHook(useCounter)

    const { count, handleAdd } = result.current

    act(() => {
      handleAdd()
      handleAdd()
    })

    expect(result.current.count).toBe(12)
  })

  test('should decrement counter', () => {
    const { result } = renderHook(useCounter)

    const { handleSubstract } = result.current

    act(() => {
      handleSubstract()
      handleSubstract()
    })

    expect(result.current.count).toBe(8)
  })

  test('should reset counter', () => {
    const { result } = renderHook(useCounter)

    const { handleAdd, handleReset } = result.current

    act(() => {
      handleAdd()
      handleAdd()
      handleAdd()
      handleReset()
    })

    expect(result.current.count).toBe(10)
  })
})
