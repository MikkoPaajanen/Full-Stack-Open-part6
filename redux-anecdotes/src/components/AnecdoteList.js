import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { votedMessage, setNull } from '../reducers/NotificationReducer'


const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(a => a.content.toLowerCase().includes(props.store.getState().filter))
  const vote = ( id, content) => {
    console.log('vote', id)
    props.store.dispatch(voteAnecdote(id))
    props.store.dispatch(votedMessage(content))
    setTimeout(() => props.store.dispatch(setNull()), 5000)
  }

  return (
    <div>
      <br/>
      {anecdotes.map(anecdote =>
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



export default AnecdoteList