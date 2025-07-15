// MerchandisePage.jsx
import { FaTshirt, FaBook, FaShoppingBag, FaHatCowboy } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function MerchandisePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Sample product data - this would come from your backend/dashboard later
    const products = [
        {
            id: 1,
            name: "Gloria Karen Signature T-Shirt",
            price: 2500,
            category: "clothing",
            image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            description: "High-quality cotton t-shirt with Gloria's signature logo",
            variants: [
                { size: "S", color: "Red" },
                { size: "M", color: "Red" },
                { size: "L", color: "Red" }
            ]
        },
        {
            id: 2,
            name: "Inspiration Notebook",
            price: 1200,
            category: "stationery",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            description: "Premium quality notebook with Gloria's inspirational quotes",
            variants: []
        },
        {
            id: 3,
            name: "Branded Canvas Tote",
            price: 1800,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            description: "Eco-friendly tote bag with Gloria's foundation logo",
            variants: [
                { color: "Natural" },
                { color: "Black" }
            ]
        },
        {
            id: 4,
            name: "Signature Cap",
            price: 2000,
            category: "accessories",
            image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            description: "Adjustable cap with Gloria's autograph design",
            variants: [
                { color: "Navy" },
                { color: "White" }
            ]
        }
    ]

    const categories = [
        { name: "All" },
        { name: "Clothing" },
        { name: "Books" },
        { name: "Accessories" }
    ]

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-25 md:py-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl md:text-6xl font-bold mb-6 font-righteous">
                        Gloria's <span className="text-[#FFD166]">Merchandise</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto font-opensans">
                        Wear your support and spread Gloria's message
                    </p>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto pb-2 space-x-4">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-[#FF6B6B] hover:text-white transition-colors"
                            >
                                
                                <span className="font-opensans">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-shadow flex flex-col"
                            >
                                {/* Product Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                                
                                {/* Product Info */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-righteous">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 font-opensans text-sm">
                                        {product.description}
                                    </p>
                                    
                                    {/* Variants */}
                                    {product.variants.length > 0 && (
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-500 font-opensans mb-1">Options:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {product.variants.map((variant, i) => (
                                                    <span 
                                                        key={i}
                                                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                                                    >
                                                        {variant.size ? `${variant.size} | ` : ''}{variant.color}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="mt-auto flex items-center justify-between">
                                        <span className="text-lg font-bold text-[#FF6B6B] font-opensans">
                                            KES {product.price.toLocaleString()}
                                        </span>
                                        <button className="bg-[#2B2D42] hover:bg-[#1A1C2E] text-white py-2 px-4 rounded-full text-sm font-opensans transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-[#2B2D42] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6 font-righteous">
                        Your Purchase Supports Gloria's Mission
                    </h2>
                    <p className="text-xl mb-8 font-opensans max-w-2xl mx-auto">
                        All proceeds go towards Gloria's creative projects and foundation initiatives
                    </p>
                    <Link
                        to="/foundation"
                        className="inline-block bg-[#FFD166] hover:bg-[#FFC233] text-[#2B2D42] py-3 px-8 rounded-full font-bold transition-colors font-opensans"
                    >
                        Learn About the Foundation
                    </Link>
                </div>
            </section>
        </div>
    )
}