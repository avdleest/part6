import anecdotesService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a =>
        a.id !== id ? a : changedAnecdote
      )
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const upVote = (id, currentVote, content) => {
  return async dispatch => {
    const data = {
      votes: currentVote + 1,
      content
    }
    const anecdote = await anecdotesService.update(id, data)
    dispatch({
      type: 'VOTE',
      id: anecdote.id
    }
    )
  }
}

export const createNewAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdotesService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer