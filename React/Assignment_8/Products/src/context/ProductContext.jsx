import { createContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/productApi'

export const ProductDataContext = createContext([])

const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const setData = async () => {
      try {
        const data = await getAllProductData()
        setProductData(data)
      } catch (error) {
        console.error('Failed to fetch products', error)
      }
    }

    setData()
  }, [])

  return (
    <ProductDataContext.Provider value={productData}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext
