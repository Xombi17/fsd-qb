function ProductList({ products }) {
  return (
    <ul className="product-list">
      {products.length === 0 && <li>No products found</li>}
      {products.map(product => (
        <li key={product.id}>
          <span>{product.name}</span>
          <span>₹{product.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
