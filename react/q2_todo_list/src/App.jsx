import { useState } from 'react'
import TaskItem from './components/TaskItem'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    if (input.trim() === '') return
    setTasks([...tasks, { id: Date.now(), text: input }])
    setInput('')
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {/* Render tasks dynamically using .map() with key */}
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks yet. Add one above!</p>}
    </div>
  )
}

export default App
