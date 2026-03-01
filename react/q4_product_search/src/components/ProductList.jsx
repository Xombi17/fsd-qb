function ProductList({ products }) {
  if (products.length === 0) {
    return <p>No products found.</p>
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <span>{product.name}</span>
          <span>${product.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default ProductList
