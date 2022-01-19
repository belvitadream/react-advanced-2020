import { useState, useEffect } from 'react'

// when we create our own Hooks (like useState, useEffect), we should also name it the same way.
// name should start with "use" (useFetch and not Fetch). Cause it will not work

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }
    getProducts()
  }, [url])

  return { loading, products }
}
