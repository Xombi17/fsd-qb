import { useEffect, useState } from 'react'
import UserTable from './components/UserTable'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [fetchTrigger, setFetchTrigger] = useState(0)

  function handleFetchUsers() {
    setLoading(true)
    setError(null)
    setFetchTrigger((prev) => prev + 1)
  }

  useEffect(() => {
    if (fetchTrigger === 0) return

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
  }, [fetchTrigger])

  return (
    <div className="app">
      <h1>User List</h1>
      <button onClick={handleFetchUsers} disabled={loading}>
        {loading ? 'Fetching...' : 'Fetch Users'}
      </button>

      {fetchTrigger === 0 && !loading && !error && <h2>Click "Fetch Users" to load data</h2>}
      {loading && <h2>Loading users...</h2>}
      {error && <h2>Error: {error}</h2>}
      {!loading && !error && users.length > 0 && <UserTable users={users} />}
    </div>
  )
}

export default App
