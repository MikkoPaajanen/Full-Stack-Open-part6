import anecdoteService from '../services/anecdotes'

/*const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)*/

export const createAnecdote = (data) => {
  console.log('data new anecdote', data)
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    id: id
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const anecdoteToVote = state.find(n => n.id === action.id)
      console.log('anecdote to vote', anecdoteToVote)
      const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1}
      console.log('voted anecdote', votedAnecdote)
      return state.map(n => n.id !== action.id ? n : votedAnecdote)
    case 'NEW_ANECDOTE':
      console.log('content', action.data)
      //const newAnecdote = asObject(action.content)
      //console.log('newAnecdote', newAnecdote)
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export default reducer