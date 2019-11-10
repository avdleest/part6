import React from 'react'
import { connect } from 'react-redux'

// export const notificationChangeHandler = (content) => {
//   console.log(`not handler: ${props}`)
//   if (content.length > 50) content = `${content.slice(0, 50)}...`
//   props.setNotification(content)
//   setTimeout(() => {
//     props.removeNotification()
//   }, 5000)
// }

const Notification = (props) => {
  console.log(props)
  const message = props.notification

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (message === null) {
    return null
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.notification)
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps
)(Notification)