import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    setIsDark(!isDark)
  }

  let theme = isDark ? 'dark' : 'light'

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Switcher</h1>
      <p>Current Theme: <b>{theme.toUpperCase()}</b></p>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  )
}

export default App
