import { useState } from 'react'
import FormInput from './components/FormInput'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    let ok = true

    setNameError('')
    setEmailError('')
    setPasswordError('')

    if (name.trim() === '') {
      setNameError('Name is required')
      ok = false
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Enter a valid email')
      ok = false
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters')
      ok = false
    }

    if (!ok) {
      setSuccess(false)
    } else {
      setSuccess(true)
    }
  }

  return (
    <div className="app">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} error={nameError} />
        <FormInput type="text" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} error={emailError} />
        <FormInput type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} error={passwordError} />
        <button type="submit">Register</button>
      </form>
      {success && <p className="success">Registration successful!</p>}
    </div>
  )
}

export default App
