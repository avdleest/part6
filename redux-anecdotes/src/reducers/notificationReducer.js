export const setNotification = (text) => {
  return {
    type: 'SET_NOTIFICATION',
    text
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.text
    case 'REMOVE_NOTIFICATION':
      return null
    default:
      return state
  }
}


export default notificationReducer