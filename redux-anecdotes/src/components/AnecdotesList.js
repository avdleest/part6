import React from 'react'
import { connect } from 'react-redux'
import { upVote } from '../reducers/anecdoteReducer'
import { showNotificationWithTimeout } from '../reducers/notificationReducer'

const anecdotesToShow = ({ anecdotes, filter }) => {
  return (
    filter
      ? anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
      : anecdotes
  )
}

const AnecdotesList = (props) => {
  console.log(props)

  const vote = ({ id, content, votes }) => {
    props.upVote(id, votes, content)
    props.showNotificationWithTimeout(`You voted on: ${content}`, 5)

  }
  const byVotes = (a1, a2) => a2.votes - a1.votes

  return (
    <div>
      {props.visibleAnecdotes.sort(byVotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes {'  '}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  upVote,
  showNotificationWithTimeout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdotesList)
