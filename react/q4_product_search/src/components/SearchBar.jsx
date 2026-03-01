function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  )
}

export default SearchBar
