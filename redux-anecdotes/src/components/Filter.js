import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    event.preventDefault()
    const filter = event.target.value
    props.changeFilter(filter)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <p>filter <input onChange={handleChange} /></p>
    </div>
  )
}

export default connect(
  null,
  { changeFilter }
)(Filter)