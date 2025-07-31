import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filter';
import productsData from '../data/products';
import { motion } from 'framer-motion';

const ShopPage = () => {
  const [filters, setFilters] = useState({ type: '', size: '', color: '' });

  const filteredProducts = productsData.filter((product) => {
    return (
      (!filters.type || product.type === filters.type) &&
      (!filters.size || product.sizes.includes(filters.size)) &&
      (!filters.color || product.colors.includes(filters.color))
    );
  });

  return (
    <div className="bg-gradient-to-b from-[#FF6B6B]/10 to-white min-h-screen py-20 md:py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] font-righteous mb-4">
            Gloria's <span className="text-[#FF6B6B]">Merchandise</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-opensans">
            Wear your support and spread Gloria's message
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <Filters filters={filters} setFilters={setFilters} />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-[#2B2D42] font-opensans">
              No products match your filters
            </h3>
            <button 
              onClick={() => setFilters({ type: '', size: '', color: '' })}
              className="mt-4 bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-6 py-2 rounded-full font-medium transition-colors font-opensans"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;