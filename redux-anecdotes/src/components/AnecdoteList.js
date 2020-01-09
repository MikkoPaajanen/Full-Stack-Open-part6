import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { votedMessage, setNull } from '../reducers/NotificationReducer'


const AnecdoteList = (props) => {
  
  const vote = ( anecdote ) => {
    console.log('vote', anecdote)
    props.voteAnecdote(anecdote)
    props.votedMessage(anecdote.content)
    setTimeout(() => props.setNull(), 5000)
  }

  return (
    <div>
      <br/>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}
const anecdotesToShow = ({ anecdotes, filter }) => {
  return anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(a => a.content.toLowerCase().includes(filter))
} 

const mapStateToProps = (state) => {
  console.log('mapstatetoprops', state)
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  votedMessage,
  setNull
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList