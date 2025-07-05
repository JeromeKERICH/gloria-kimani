// SupportGloria.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SupportGloria() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-righteous">
              Support Gloria's Journey
            </h2>
            
            <p className="text-xl text-white/90 mb-8 font-opensans leading-relaxed">
              "Some opportunities pass by due to lack of financial support. Help Gloria soar higher."
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/donate"
                className="bg-white text-[#FF6B6B] hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 font-opensans text-lg shadow-lg"
              >
                Donate Now
              </Link>
              
              <Link
                to="/support"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF6B6B] px-8 py-4 rounded-full font-bold transition-all duration-300 font-opensans text-lg"
              >
                Other Ways to Help
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}