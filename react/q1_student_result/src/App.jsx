import { useState } from 'react'
import Result from './components/Result'
import './App.css'

// Function to calculate grade based on percentage
function getGrade(pct) {
  if (pct >= 90) return 'A+'
  if (pct >= 80) return 'A'
  if (pct >= 70) return 'B'
  if (pct >= 60) return 'C'
  if (pct >= 50) return 'D'
  return 'F'
}

function App() {
  const [name, setName] = useState('')
  const [sub1, setSub1] = useState('')
  const [sub2, setSub2] = useState('')
  const [sub3, setSub3] = useState('')
  const [result, setResult] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const marks = [Number(sub1), Number(sub2), Number(sub3)]
    const total = marks[0] + marks[1] + marks[2]
    const percentage = (total / 300 * 100).toFixed(2)
    const grade = getGrade(percentage)
    setResult({ name, marks, total, percentage, grade })
  }

  return (
    <div className="app">
      <h1>Student Result Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Subject 1 Marks" value={sub1}
          onChange={(e) => setSub1(e.target.value)} min="0" max="100" required />
        <input type="number" placeholder="Subject 2 Marks" value={sub2}
          onChange={(e) => setSub2(e.target.value)} min="0" max="100" required />
        <input type="number" placeholder="Subject 3 Marks" value={sub3}
          onChange={(e) => setSub3(e.target.value)} min="0" max="100" required />
        <button type="submit">Show Result</button>
      </form>

      {/* Pass data from parent to child using props */}
      {result && (
        <Result
          name={result.name}
          marks={result.marks}
          total={result.total}
          percentage={result.percentage}
          grade={result.grade}
        />
      )}
    </div>
  )
}

export default App
