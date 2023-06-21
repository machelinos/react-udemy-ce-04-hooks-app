import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks'

const initialState = {
  name: 'Marcel',
  email: 'marcel@email.com',
}

describe('useForm hook tests', () => {
  test('should return the default values', () => {
    const { result } = renderHook(useForm, { initialProps: initialState })
    expect(result.current).toEqual({
      name: initialState.name,
      email: initialState.email,
      formState: initialState,
      handleInputChange: expect.any(Function),
      handleResetClick: expect.any(Function),
    })
  })

  test('should change the name in the form', () => {
    const { result } = renderHook(useForm, { initialProps: initialState })
    const { handleInputChange } = result.current

    const event = {
      target: {
        name: 'name',
        value: 'Joy',
      },
    }
    act(() => {
      handleInputChange(event)
    })

    expect(result.current.name).toBe(event.target.value)
  })

  test('should reset the form to the default values', () => {
    const { result } = renderHook(useForm, { initialProps: initialState })
    const { handleInputChange, handleResetClick } = result.current

    const event = {
      target: {
        name: 'name',
        value: 'Joy',
      },
    }
    act(() => {
      handleInputChange(event)
      handleResetClick()
    })

    expect(result.current).toEqual({
      name: initialState.name,
      email: initialState.email,
      formState: initialState,
      handleInputChange: expect.any(Function),
      handleResetClick: expect.any(Function),
    })
  })
})
