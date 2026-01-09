import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams, Link } from 'react-router-dom'

const ProductDetails = () => {
  const productData = useContext(ProductDataContext)
  const { productId } = useParams()

  const selectedProduct = productData.find(
    (elem) => elem.id === Number(productId)
  )

  // CUSTOM ANIMATED LOADING STATE (Skeleton UI)

  if (!selectedProduct) {
    return (
      <div className="min-h-screen bg-zinc-900 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto animate-pulse">
          
          {/* Back Button Placeholder */}
          <div className="h-6 w-32 bg-zinc-800 rounded mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Image Skeleton */}
            <div className="w-full h-[500px] bg-zinc-800 rounded-2xl"></div>

            {/* Right Column: Text Skeletons */}
            <div className="flex flex-col space-y-6">
              
              {/* Category & Rating Placeholder */}
              <div className="flex justify-between w-full">
                <div className="h-6 w-24 bg-zinc-800 rounded-full"></div>
                <div className="h-6 w-32 bg-zinc-800 rounded"></div>
              </div>

              {/* Title Placeholder (Double line for large text) */}
              <div className="space-y-3">
                <div className="h-10 w-3/4 bg-zinc-700 rounded"></div>
                <div className="h-10 w-1/2 bg-zinc-700 rounded"></div>
              </div>

              {/* Description Placeholder (Multiple lines) */}
              <div className="space-y-2 border-l-4 border-zinc-800 pl-4 py-2">
                <div className="h-4 w-full bg-zinc-800 rounded"></div>
                <div className="h-4 w-full bg-zinc-800 rounded"></div>
                <div className="h-4 w-5/6 bg-zinc-800 rounded"></div>
                <div className="h-4 w-4/6 bg-zinc-800 rounded"></div>
              </div>

              {/* Price & Button Placeholder */}
              <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-6 mt-4">
                <div className="h-12 w-32 bg-zinc-700 rounded"></div>
                <div className="flex gap-4 w-full sm:w-auto">
                   <div className="h-12 w-40 bg-zinc-800 rounded-lg"></div>
                   <div className="h-12 w-32 bg-zinc-800 rounded-lg"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  // ---------------------------------------------------------
  // ACTUAL CONTENT
  // ---------------------------------------------------------
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        
        <Link 
          to="/products" 
          className="inline-flex items-center text-zinc-400 hover:text-blue-400 mb-8 transition-colors"
        >
          &larr; Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Product Image */}
          <div className="w-full h-[500px] bg-white rounded-2xl p-10 flex items-center justify-center shadow-2xl shadow-blue-500/10 relative overflow-hidden group">
             <img 
               src={selectedProduct.image} 
               alt={selectedProduct.title} 
               className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
             />
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6">
            
            <div className="flex items-center justify-between">
                <span className="bg-zinc-800 text-zinc-300 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-zinc-700">
                  {selectedProduct.category}
                </span>
                
                <div className="flex items-center text-yellow-500">
                    <span className="mr-2 font-bold text-lg">{selectedProduct.rating?.rate}</span>
                    <span className="text-sm">
                         {'★'.repeat(Math.round(selectedProduct.rating?.rate || 0))}
                         {'☆'.repeat(5 - Math.round(selectedProduct.rating?.rate || 0))}
                    </span>
                    <span className="text-zinc-500 text-sm ml-2">
                        ({selectedProduct.rating?.count} reviews)
                    </span>
                </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              {selectedProduct.title}
            </h1>

            <p className="text-zinc-400 text-base leading-relaxed border-l-4 border-zinc-700 pl-4">
              {selectedProduct.description}
            </p>

            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <span className="text-4xl font-bold text-emerald-400">
                ${selectedProduct.price.toFixed(2)}
              </span>

              <div className="flex gap-4 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-lg shadow-blue-600/30">
                  Add to Cart
                </button>
                <button className="flex-1 sm:flex-none border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">
                  Wishlist
                </button>
              </div>
            </div>

            <div className="text-xs text-zinc-600 pt-4">
                Product ID: {selectedProduct.id} | Free Shipping Available
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails