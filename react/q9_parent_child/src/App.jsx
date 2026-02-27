import { useState } from 'react'
import Child from './components/Child'
import './App.css'

// Parent component - stores message in state
function App() {
  const [message, setMessage] = useState('Hello from Parent!')

  // Callback function passed to child (lifting state up)
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

      {/* Pass message and callback to Child via props */}
      <Child message={message} onUpdateMessage={updateMessage} />
    </div>
  )
}

export default App
