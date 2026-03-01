import { useState } from 'react'
import TaskItem from './components/TaskItem'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    if (input.trim() === '') return
    setTasks([...tasks, input])
    setInput('')
  }

  function deleteTask(indexToDelete) {
    let updatedTasks = []
    for (let i = 0; i < tasks.length; i++) {
      if (i !== indexToDelete) {
        updatedTasks.push(tasks[i])
      }
    }
    setTasks(updatedTasks)
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
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} onDelete={deleteTask} />
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks yet. Add one above!</p>}
    </div>
  )
}

export default App
