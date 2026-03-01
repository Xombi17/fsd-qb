import { useState } from 'react'
import Child from './components/Child'
import './App.css'

function App() {
  const [message, setMessage] = useState('Hello from Parent!')

  function updateMessage(newMsg) {
    setMessage(newMsg)
  }

  return (
    <div className="app">
      <h1>Parent-Child Communication</h1>
      <div className="parent">
        <h2>Parent Component</h2>
        <p>Current Message: <b>{message}</b></p>
        <button onClick={() => setMessage('Hello from Parent!')}>
          Reset Message
        </button>
      </div>

      <Child message={message} onUpdateMessage={updateMessage} />
    </div>
  )
}

export default App
