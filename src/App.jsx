import { useState } from 'react'
import Products from './components/Products'
import {products as initialProducts} from './mocks/products.json'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  // Esto es para juniors :(
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
         )
       )
    })
  }

  return (
    <>
      <Products products={filterProducts(products)}/>
    </>
  )
}

export default App
