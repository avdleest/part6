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

function showNotification(text) {
  return { type: 'SET_NOTIFICATION', text }
}
function hideNotification() {
  return { type: 'REMOVE_NOTIFICATION' }
}

export const showNotificationWithTimeout = (text, time) => {
  return async (dispatch) => {
    if (text.length > 50) text = `${text.slice(0, 50)}...`
    dispatch(showNotification(text))
    setTimeout(() => {
      dispatch(hideNotification())
    }, time * 1000)
  }
}

export default notificationReducer