import { useState } from 'react'
import LoginMessage from './components/LoginMessage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="app">
      <h1>Login Status</h1>

      <LoginMessage isLoggedIn={isLoggedIn} />

      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default App
