// FloatingWhatsApp.jsx
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  const phoneNumber = '254721651705' 
  const message = "Hello Gloria Management! I'd like to know more about..." 

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <FaWhatsapp className="text-white text-3xl" />
          
          {/* Optional ping animation */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40"></span>
          </span>
        </div>
      </a>
      
      {/* Optional tooltip */}
      <div className="absolute right-20 bottom-2 bg-[#2B2D42] text-white px-3 py-1 rounded-lg text-sm font-opensans whitespace-nowrap shadow-md opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
        <span className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2B2D42] rotate-45"></span>
      </div>
    </motion.div>
  )
}