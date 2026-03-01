import { useState } from 'react'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
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
      <SearchBar search={search} onSearchChange={setSearch} />

      <div className="product-list-container">
        <ProductList products={filteredProducts} />
      </div>
    </div>
  )
}

export default App
