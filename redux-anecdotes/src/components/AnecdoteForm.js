import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createdMessage, setNull } from '../reducers/NotificationReducer'


const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.createAnecdote(content)
    event.target.anecdote.value = ''
    props.createdMessage(content)
    setTimeout(() => props.setNull(), 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('mapstatetoprops', state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  createAnecdote,
  createdMessage,
  setNull
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm