import { useState } from 'react'
import Counter from './components/Counter'
import StepControl from './components/StepControl'
import './App.css'
import ShowButton from './components/showbutton'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  // Functional updates in useState
  function increment() {
    setCount(prev => prev + step)
  }

  function decrement() {
    setCount(prev => prev - step)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className="app">
      <h1>Counter App</h1>
      <Counter count={count} />
      <StepControl step={step} onStepChange={setStep} />

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
