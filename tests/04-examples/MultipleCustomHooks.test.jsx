import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/04-examples/MultipleCustomHooks'
import { useFetch } from '../../src/hooks/useFetch'
import { useCounter } from '../../src/hooks/useCounter'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')
describe('<MultipleCustomHooks /> tests', () => {
  const mockHandleAdd = jest.fn()
  useCounter.mockReturnValue({
    count: 1,
    handleAdd: mockHandleAdd,
    handleReset: () => {},
    handleSubstract: () => {},
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should load the initial state', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Rick and Morty characters'))
    expect(screen.getByText('Loading...'))
    const nextBtn = screen.getByRole('button')
    expect(nextBtn.disabled).toBeTruthy()
  })

  test('should load a quote', () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Morty',
        species: 'Human',
        gender: 'male',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    expect(screen.getByText('Morty')).toBeTruthy()
    expect(screen.getByText('Human')).toBeTruthy()
    const nextBtn = screen.getByRole('button')
    expect(nextBtn.disabled).toBeFalsy()
  })

  test('should call handleAdd from useCounter', () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Morty',
        species: 'Human',
        gender: 'male',
        status: 'Alive',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)
    const nextBtn = screen.getByRole('button')
    fireEvent.click(nextBtn)
    expect(mockHandleAdd).toHaveBeenCalled()
  })
})
