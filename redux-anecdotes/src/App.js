import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes()
  }, [props])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesForm />
      <AnecdotesList />
    </div>
  )
}

export default connect(
  null,
  { initializeAnecdotes }
)(App)
