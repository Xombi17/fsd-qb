import React from 'react'
import './showbutton.css'

const ShowButton = () => {
  const [showMessage, setShowMessage] = React.useState(false)

  const toggle = () => {
    setShowMessage((prev) => !prev)
  }

  return (
    <div>
      <button onClick={toggle}>Press Me</button>
      
      {showMessage && <p>Welcome to React..</p>}
    </div>
  )
}

export default ShowButton
