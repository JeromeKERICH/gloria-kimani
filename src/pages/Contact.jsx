// ContactPage.jsx
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-righteous">
            Get In <span className="text-[#FFD166]">Touch</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-opensans">
            We'd love to hear from you! Reach out for collaborations, questions, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[#2B2D42] mb-6 font-righteous">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-opensans">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-opensans">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-opensans">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white py-4 px-6 rounded-lg font-bold transition-colors font-opensans text-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start">
                <div className="bg-[#FF6B6B]/10 p-3 rounded-full mr-4">
                  <FaPhone className="text-[#FF6B6B] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-1 font-righteous">Call or WhatsApp</h3>
                  <a href="tel:+254721651705" className="text-gray-600 hover:text-[#FF6B6B] transition-colors font-opensans block">
                    +254 721 651 705
                  </a>
                  <a href="https://wa.me/254721651705" className="inline-flex items-center mt-2 text-[#25D366] hover:text-[#1DA851] font-opensans">
                    <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start">
                <div className="bg-[#FFD166]/10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#FFD166] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-1 font-righteous">Email Us</h3>
                  <a href="mailto:hello@gloriakaren.co.ke" className="text-gray-600 hover:text-[#FF6B6B] transition-colors font-opensans">
                    hello@gloriakaren.co.ke
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start">
                <div className="bg-[#2B2D42]/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-[#2B2D42] text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-1 font-righteous">Our Location</h3>
                  <p className="text-gray-600 font-opensans">Murang'a, Kenya</p>
                  
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#2B2D42] mb-4 font-righteous">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/gloriakarenofficial" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 p-3 rounded-full text-[#FF6B6B] transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://youtube.com/GloriaKaren" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 p-3 rounded-full text-[#FF6B6B] transition-colors">
                    <FaYoutube className="text-xl" />
                  </a>
                  <a href="https://facebook.com/GloriaKaren" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 p-3 rounded-full text-[#FF6B6B] transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}