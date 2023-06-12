import PropTypes from 'prop-types'
import { memo } from 'react'

export const ShowAddBtn = memo(({ handleAdd }) => {
  console.log('rendered component with memoized function prop :(')
  return (
    <button className="btn btn-primary" onClick={handleAdd}>
      Increment
    </button>
  )
})

ShowAddBtn.propTypes = {
  handleAdd: PropTypes.func.isRequired,
}

ShowAddBtn.displayName = 'ShowAddBtn'
