import { useState } from 'react'
import Counter from './components/Counter'
import StepControl from './components/StepControl'
import ShowButton from './components/showbutton'
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
      <h2>Count: <Counter count={count} /></h2>

      <StepControl step={step} onStepChange={(value) => setStep(value || 1)} />

      <div className="buttons">
        <button onClick={decrement}>- Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
        <button onClick={increment}>+ Increment</button>
      </div>

      <ShowButton />
    </div>
  )
}

export default App
