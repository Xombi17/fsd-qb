import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Multi-Page App</h1>

        {/* Navigation links - no page reload */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Display component based on URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
