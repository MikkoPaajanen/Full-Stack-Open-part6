import React from 'react'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState().sort((a, b) => b.votes - a.votes)
  const vote = (id) => {
    console.log('vote', id)
    props.store.dispatch({
      type: 'VOTE',
      id: id
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}



export default AnecdoteList