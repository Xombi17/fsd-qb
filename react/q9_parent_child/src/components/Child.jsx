function Child({ message, onUpdateMessage }) {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>Message from Parent: <b>{message}</b></p>
      <button onClick={() => onUpdateMessage('Hello from Child!')}>
        Update Parent Message
      </button>
    </div>
  )
}

export default Child
