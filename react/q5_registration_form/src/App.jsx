import { useState } from 'react'
import FormInput from './components/FormInput'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function validate() {
    const newErrors = {}
    if (name.trim() === '') newErrors.name = 'Name is required'
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Enter a valid email'
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccess(false)
    } else {
      setErrors({})
      setSuccess(true)
    }
  }

  return (
    <div className="app">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} error={errors.name} />
        <FormInput type="text" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} error={errors.email} />
        <FormInput type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} error={errors.password} />
        <button type="submit">Register</button>
      </form>
      {success && <p className="success">Registration successful!</p>}
    </div>
  )
}

export default App
