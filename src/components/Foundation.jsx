// FoundationLink.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FoundationLink() {
  return (
    <section className="py-16 md:py-20 bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-righteous">
                  Gloriasarah Foundation
                </h2>
                <p className="text-lg md:text-xl mb-6 font-opensans">
                  "Gloriasarah Foundation is Gloria's way of giving back, to kids, 
                  families, the elderly, and the environment."
                </p>
              </div>
              
              <Link
                to="/foundation"
                className="flex-shrink-0 bg-white text-[#FF6B6B] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all duration-300 font-opensans flex items-center gap-2"
              >
                Visit Foundation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}