import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
    >
      {/* Image Container with Hover Zoom */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <h2 className="text-lg font-bold text-[#2B2D42] font-righteous line-clamp-2">
            {product.name}
          </h2>
          <p className="text-[#FF6B6B] font-bold text-lg mt-1">
            KES {product.price.toLocaleString()}
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-4 font-opensans line-clamp-2">
          Buy Our Merchandise and Promote Gloria's Mission
        </p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/checkout/${product.id}`)}
          className="mt-auto bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-2 px-4 rounded-full font-medium hover:opacity-90 transition-opacity font-opensans"
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;