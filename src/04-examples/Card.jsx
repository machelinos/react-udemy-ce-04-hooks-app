import PropTypes from 'prop-types'

export const Card = ({ data }) => {
  const { image, name, species, gender, status } = data
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
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
