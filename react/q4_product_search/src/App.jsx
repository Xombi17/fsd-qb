import { useState } from 'react'
import './App.css'

function App() {
  const [products] = useState([
    { id: 1, name: 'iPhone 15', price: 799 },
    { id: 2, name: 'Samsung Galaxy S24', price: 699 },
    { id: 3, name: 'MacBook Pro', price: 1999 },
    { id: 4, name: 'Dell XPS Laptop', price: 1299 },
    { id: 5, name: 'Sony Headphones', price: 349 },
    { id: 6, name: 'iPad Air', price: 599 },
    { id: 7, name: 'Google Pixel 8', price: 699 },
    { id: 8, name: 'Nintendo Switch', price: 299 },
  ])
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="product-list">
        {filteredProducts.length === 0 && <li>No products found</li>}
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>₹{product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
