// Hero.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        {/* Replace with your actual image/video */}
        <div className="absolute inset-0 bg-[url('/assets/22.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Alternative: If using video */}
        {/* <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/path-to-gloria-video.mp4" type="video/mp4" />
        </video> */}
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-righteous leading-tight">
            Meet Gloria Karen <br />
            <span className="text-[#FFD166]">The Rising Star</span> Lighting Up Africa's Stage
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2B2D42] px-8 py-3 rounded-full font-medium transition-all duration-300 font-opensans text-lg"
          >
            Work With Me →
          </Link>
          <Link
            to="/donate"
            className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 font-opensans text-lg shadow-lg"
          >
            Support My Journey
          </Link>
        </motion.div>
      </div>

      {/* Scrolling indicator (optional) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}