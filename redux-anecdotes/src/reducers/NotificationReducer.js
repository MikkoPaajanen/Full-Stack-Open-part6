const notificationAtStart = null

export const votedMessage = (content) => {
  return {
    type: 'MESSAGE',
    message: `you voted for ${content}`
  }
}

export const setNull = () => {
  return {
    type: 'MESSAGE',
    message: null
  }
}

export const createdMessage = (content) => {
  return {
    type: 'MESSAGE',
    message: `you created anecdote: ${content}`
  }
}

const notificationReducer = (state = notificationAtStart, action) => {
  switch (action.type) {
    case 'MESSAGE':
      return action.message
    default:
      return state
  }
}

export default notificationReducer