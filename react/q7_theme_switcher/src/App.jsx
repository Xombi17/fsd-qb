import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  // Store current theme in state
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    // Conditional class assignment based on theme state
    <div className={`app ${theme}`}>
      <h1>Theme Switcher</h1>
      <p>Current Theme: <b>{theme.toUpperCase()}</b></p>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  )
}

export default App
