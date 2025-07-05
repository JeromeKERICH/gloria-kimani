// AboutPreview.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl shadow-2xl"
          >
            {/* Replace with your actual image */}
            <div className="aspect-w-3 aspect-h-4 bg-gray-200">
              <img 
                src="/assets/14.jpg" 
                alt="Gloria Karen" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#FFD166] text-[#2B2D42] px-4 py-2 font-bold font-righteous text-sm md:text-base">
              AGE 10 • KENYA
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] mb-6 font-righteous">
              About <span className="text-[#FF6B6B]">Gloria Karen</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 font-opensans leading-relaxed">
              At just 10 years old, Gloria Karen Wairimu Kimani is already a model, dancer, 
              actress, singer, content creator, and award-winning kid influencer — showing 
              that passion has no age limit.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#FF6B6B]/10 p-4 rounded-lg">
                <h3 className="font-bold text-[#FF6B6B] font-righteous">20+</h3>
                <p className="text-gray-600 font-opensans">Performances</p>
              </div>
              <div className="bg-[#FFD166]/10 p-4 rounded-lg">
                <h3 className="font-bold text-[#FFD166] font-righteous">10+</h3>
                <p className="text-gray-600 font-opensans">Awards</p>
              </div>
              <div className="bg-[#2B2D42]/10 p-4 rounded-lg">
                <h3 className="font-bold text-[#2B2D42] font-righteous">5</h3>
                <p className="text-gray-600 font-opensans">Talents</p>
              </div>
              <div className="bg-[#FF6B6B]/10 p-4 rounded-lg">
                <h3 className="font-bold text-[#FF6B6B] font-righteous">30K+</h3>
                <p className="text-gray-600 font-opensans">Followers</p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center bg-[#2B2D42] hover:bg-[#FF6B6B] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 font-opensans"
            >
              Read Full Story
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}