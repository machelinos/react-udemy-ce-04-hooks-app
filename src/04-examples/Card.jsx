import PropTypes from 'prop-types'
import { useLayoutEffect, useRef, useState } from 'react'

export const Card = ({ data }) => {
  const nameRef = useRef()
  const { image, name, species, gender, status } = data
  const [bounds, setBounds] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    setBounds({
      x: nameRef.current.clientWidth,
      y: nameRef.current.clientHeight,
    })
  }, [data])

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title" ref={nameRef}>
          {name}
        </h5>
        <p>{JSON.stringify(bounds)}</p>
        <p className="card-text">
          <strong>Species:</strong> {species}
          <br />
          <strong>Gender:</strong> {gender}
          <br />
          <strong>Status:</strong> {status}
          <br />
        </p>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}
