import React from 'react'
import { connect } from 'react-redux'
import { upVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const anecdotesToShow = ({ anecdotes, filter }) => {
  return (
    filter
      ? anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
      : anecdotes
  )
}

const AnecdotesList = (props) => {
  console.log(props)

  const vote = (id, content) => {
    if (content.length > 50) content = `${content.slice(0, 50)}...`
    props.setNotification(`You voted on '${content}'`)
    setTimeout(() => {
      props.removeNotification()
    }, 5000)
    props.upVote(id)
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
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
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
  setNotification,
  removeNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdotesList)
