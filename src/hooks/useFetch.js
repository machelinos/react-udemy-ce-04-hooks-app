import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    hasError: null,
  })

  const fetchUrl = async () => {
    setState({ ...state, isLoading: true })
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      return data
    } catch (error) {
      return {
        ...state,
        isLoading: false,
        hasError: error,
      }
    }
  }

  useEffect(() => {
    fetchUrl().then((data) => {
      setState({ ...state, data, isLoading: false })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return {
    state,
    ...state,
  }
}
