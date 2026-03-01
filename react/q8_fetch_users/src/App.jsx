import { useState, useEffect } from 'react'
import UserTable from './components/UserTable'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch')
        return response.json()
      })
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="app"><h1>Loading...</h1></div>

  if (error) return <div className="app"><h1>Error: {error}</h1></div>

  return (
    <div className="app">
      <h1>User List</h1>
      <UserTable users={users} />
    </div>
  )
}

export default App
