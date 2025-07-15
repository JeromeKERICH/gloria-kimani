// FloatingWhatsApp.jsx
import { FaCommentAlt, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  const phoneNumber = '254721651705' 
  const message = "Hello Gloria! I'd like to know more about..." 

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#2B2D42] hover:bg-[#128C7E] text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="relative">
          <FaCommentAlt className="text-white text-xl" />
          
        </div>
        
      </a>
      
     
    </motion.div>
  )
}