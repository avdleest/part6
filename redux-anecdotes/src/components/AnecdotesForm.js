import React from 'react'
import { connect } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const newAnecdote = (event) => {
    event.preventDefault()
    console.log(`AnecdoteForm`, props)
    let content = event.target.anecdote.value
    props.createNewAnecdote(content)
    if (content.length > 50) content = `${content.slice(0, 50)}...`
    props.setNotification(`You added: '${content}`)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
    event.target.anecdote.value = ''
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
  { createNewAnecdote, setNotification, removeNotification }
)(AnecdoteForm)