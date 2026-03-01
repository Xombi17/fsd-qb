import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function increment() {
    setCount((prev) => prev + step)
  }

  function decrement() {
    setCount((prev) => prev - step)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <div className="step-box">
        <label htmlFor="step">Step Value</label>
        <input
          id="step"
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
        />
      </div>

      <div className="buttons">
        <button onClick={decrement}>- Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
        <button onClick={increment}>+ Increment</button>
      </div>
    </div>
  )
}

export default App
