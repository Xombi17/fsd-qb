import { useState } from 'react'
import LoginMessage from './components/LoginMessage'
import './App.css'

function App() {
  // Boolean state for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Toggle login/logout on button click
  function toggleLogin() {
    setIsLoggedIn(prev => !prev)
  }

  return (
    <div className="app">
      <h1>Login Status</h1>

      {/* Conditional rendering via child component */}
      <LoginMessage isLoggedIn={isLoggedIn} />

      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default App
