import { useCounter, useFetch } from '../hooks'
import { Card, Loading } from './'

const baseUrl = 'https://rickandmortyapi.com/api/character/'

export const MultipleCustomHooks = () => {
  const { count, handleAdd } = useCounter(1)
  const { data, isLoading } = useFetch(`${baseUrl}${count}`)

  return (
    <>
      <h1>Rick and Morty characters</h1>

      {isLoading ? <Loading /> : <Card data={data} />}

      <button
        disabled={isLoading}
        className="btn btn-primary mt-2"
        onClick={handleAdd}
      >
        Next character
      </button>
    </>
  )
}
