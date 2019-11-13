import React from 'react'
import { connect } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { showNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const newAnecdote = async (event) => {
    event.preventDefault()
    let content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createNewAnecdote(content)
    props.showNotificationWithTimeout(`You created: ${content}`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name='anecdote' /></div>
        <p><button type='submit'>create</button></p>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createNewAnecdote, showNotificationWithTimeout }
)(AnecdoteForm)