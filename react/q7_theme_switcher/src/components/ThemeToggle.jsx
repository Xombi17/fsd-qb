// ThemeToggle component - button to switch theme
function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default ThemeToggle
