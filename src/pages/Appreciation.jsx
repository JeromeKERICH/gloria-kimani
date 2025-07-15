// ThankYouPage.jsx
import { FaHeart, FaHandsHelping, FaShareAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    // You can add analytics tracking here for the donation conversion
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-righteous">
            Thank You for <span className="text-[#FFD166]">Your Support!</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-opensans">
            Your generous donation is helping Gloria achieve her dreams and uplift communities
          </p>
        </div>
      </section>

      {/* Appreciation Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-[#2B2D42] mb-6 font-righteous">
              You're Making a Difference
            </h2>
            <div className="prose max-w-none text-gray-700 mb-8 font-opensans text-lg">
              <p>
                "Your support means the world to me and the communities we serve. 
                With your help, we're one step closer to making our shared dreams a reality."
              </p>
              <p className="mt-4 text-[#FF6B6B] font-medium">
                — Gloria Karen
              </p>
            </div>
            <div className="w-24 h-1 bg-[#FFD166] mx-auto my-8"></div>
            <p className="text-gray-600 mb-8 font-opensans">
              We've sent a receipt to your email. Your contribution is tax-deductible 
              and will be used to create meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-[#2B2D42] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 font-righteous">
            Continue <span className="text-[#FFD166]">Your Impact</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-[#FF6B6B] text-4xl mb-4">
                <FaHandsHelping />
              </div>
              <h3 className="text-xl font-bold mb-3 font-righteous">Monthly Giving</h3>
              <p className="text-gray-300 mb-4 font-opensans">
                Become a sustaining donor and provide reliable support for Gloria's ongoing projects.
              </p>
              <Link
                to="/donate"
                className="inline-block bg-[#FF6B6B] hover:bg-[#FF5252] text-white py-2 px-6 rounded-full font-medium transition-colors font-opensans"
              >
                Set Up Recurring Gift
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-[#FFD166] text-4xl mb-4">
                <FaShareAlt />
              </div>
              <h3 className="text-xl font-bold mb-3 font-righteous">Spread the Word</h3>
              <p className="text-gray-300 mb-4 font-opensans">
                Share Gloria's mission with your friends and help grow our community of supporters.
              </p>
              <button
                onClick={() => {
                  const text = "I just supported Gloria Karen's amazing work! Join me in making a difference: ";
                  const url = window.location.href.replace('/thank-you', '/donate');
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + url)}`, '_blank');
                }}
                className="inline-block bg-[#FFD166] hover:bg-[#FFC233] text-[#2B2D42] py-2 px-6 rounded-full font-medium transition-colors font-opensans"
              >
                Share on Social Media
              </button>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-white text-4xl mb-4">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold mb-3 font-righteous">Other Ways to Help</h3>
              <p className="text-gray-300 mb-4 font-opensans">
                Explore volunteer opportunities, events, and more ways to get involved.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-[#2B2D42] py-2 px-6 rounded-full font-medium transition-colors font-opensans"
              >
                Get Involved
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2B2D42] mb-6 font-righteous">
            Want to do more?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-opensans max-w-2xl mx-auto">
            Contact us about partnership opportunities or larger gifts
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:opacity-90 text-white py-3 px-8 rounded-full font-bold transition-opacity font-opensans"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}