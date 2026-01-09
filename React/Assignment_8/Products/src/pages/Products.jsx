import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);
  
  // LOADING STATE: SKELETON GRID ANIMATION

  if (!productData || productData.length === 0) {
    return (
      <div className="w-full min-h-screen bg-zinc-900 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Title Skeleton */}
          <div className="w-48 h-8 bg-zinc-800 rounded animate-pulse mb-10 pl-4 border-l-4 border-zinc-700"></div>

          {/* Skeleton Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Create an array of 8 dummy items to simulate a full page */}
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg animate-pulse border border-zinc-700"
              >
                {/* Image Placeholder */}
                <div className="w-full h-60 bg-zinc-700/50 flex items-center justify-center">
                  <div className="text-zinc-600 text-4xl">
                    <i className="ri-image-line"></i>{" "}
                    {/* Optional icon placeholder */}
                  </div>
                </div>

                {/* Content Placeholder */}
                <div className="p-5 flex flex-col flex-grow space-y-4">
                  {/* Title Lines */}
                  <div className="space-y-2">
                    <div className="h-4 bg-zinc-700 rounded w-full"></div>
                    <div className="h-4 bg-zinc-700 rounded w-2/3"></div>
                  </div>

                  {/* Rating Placeholder */}
                  <div className="h-3 bg-zinc-700 rounded w-1/3 mt-4"></div>

                  {/* Price & Button Placeholder */}
                  <div className="flex justify-between items-center pt-3 border-t border-zinc-700/50 mt-auto">
                    <div className="h-6 bg-zinc-700 rounded w-16"></div>
                    <div className="h-4 bg-zinc-700 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------
  // REAL DATA RENDER
  // ---------------------------------------------------------
  return (
    <div className="w-full min-h-screen bg-zinc-900 px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Back to Home
          </Link>

          <span className="text-xs text-zinc-500">
            {productData.length} products
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-10 pl-4 border-l-4 border-blue-500">
          New Arrivals
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productData.map((elem) => (
            <Link
              key={elem.id}
              to={`/products/${elem.id}`}
              className="group relative flex flex-col bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-60 bg-white p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={elem.image}
                  alt={elem.title}
                  className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Category Badge */}
                <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                  {elem.category}
                </span>
              </div>

              {/* Content Container */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-base font-semibold text-white line-clamp-2 mb-3 group-hover:text-blue-400 transition-colors">
                  {elem.title}
                </h2>

                {/* Rating Section */}
                <div className="flex items-center mt-auto mb-4">
                  <div className="flex text-yellow-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.round(elem.rating?.rate || 0) ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-400 ml-2">
                    ({elem.rating?.count || 0} reviews)
                  </span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-700">
                  <span className="text-lg font-bold text-emerald-400">
                    ${elem.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
