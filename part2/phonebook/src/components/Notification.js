const Notification = ({ message, color }) => {
  const notificationStyle = {
    color: `${color}`,
    background: 'lightgrey',
    padding: '10px',
    borderStyle: 'solid',
    borderRadius: '5px',
    marginBottom: '10px'
  }
  
  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification