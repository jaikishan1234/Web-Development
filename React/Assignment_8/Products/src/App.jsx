import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {

  const [productData, setProductData] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/')
      setProductData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(function() {
    getData()
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
