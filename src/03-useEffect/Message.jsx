import { useEffect, useState } from 'react'

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const onMouseMove = ({ x, y }) => {
    setCoords({ x, y })
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  return (
    <>
      <h3>The user already exists.</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  )
}
