import { useState } from 'react'
import './showbutton.css'

const ShowButton = () => {
  const [showMessage, setShowMessage] = useState(false)

  const toggle = () => {
    setShowMessage(!showMessage)
  }

  return (
    <div>
      <button onClick={toggle}>Press Me</button>
      
      {showMessage && <p>Welcome to React..</p>}
    </div>
  )
}

export default ShowButton
