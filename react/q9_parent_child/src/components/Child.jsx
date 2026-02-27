// Child component - receives message and callback via props
function Child({ message, onUpdateMessage }) {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>Message from Parent: <b>{message}</b></p>
      {/* On button click, update parent message using callback */}
      <button onClick={() => onUpdateMessage('Hello from Child!')}>
        Update Parent Message
      </button>
    </div>
  )
}

export default Child
