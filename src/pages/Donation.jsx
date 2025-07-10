// DonationPage.jsx
import { FaShieldAlt, FaQuoteLeft, FaLock, FaHandshake,  FaUserLock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DonationPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-righteous">
            Support <span className="text-[#FFD166]">Gloria's</span> Mission
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-opensans">
            Your contribution helps Gloria achieve her dreams and uplift communities
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {/* Support Gloria's Journey */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#FF6B6B]">
              <div className="text-[#FF6B6B] text-4xl mb-4">
                <FaShieldAlt />
              </div>
              <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-righteous">
                Support Gloria's Journey
              </h2>
              <p className="text-gray-600 mb-6 font-opensans">
                Help Gloria pursue her dreams in pageants, performances, and creative projects.
              </p>
              <div className="mb-8">
                <Link
                  to="/checkout"
                  className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white py-3 px-6 rounded-lg font-bold transition-colors font-opensans block text-center"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            {/* Support Foundation */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#2B2D42]">
              <div className="text-[#2B2D42] text-4xl mb-4">
                <FaLock />
              </div>
              <h2 className="text-2xl font-bold text-[#2B2D42] mb-4 font-righteous">
                Support Gloriasarah Foundation
              </h2>
              <p className="text-gray-600 mb-6 font-opensans">
                Contribute to community outreach programs that make a lasting difference.
              </p>
              <div className="mb-8">
                <Link 
                  to="/checkout"
                  className="w-full bg-[#2B2D42] hover:bg-[#1A1C2E] text-white py-3 px-6 rounded-lg font-bold transition-colors font-opensans block text-center"
                >
                  Donate nOW
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Security Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-center text-[#2B2D42] mb-8 font-righteous">
              Your Donation is 100% Secure
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="text-[#FF6B6B] text-3xl mr-4">
                  <FaShieldAlt />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-righteous">Bank-Level Security</h3>
                  <p className="text-gray-600 font-opensans">
                    All transactions are protected with 256-bit SSL encryption, the same technology used by banks.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#FFD166] text-3xl mr-4">
                  <FaUserLock/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-righteous">Data Protection</h3>
                  <p className="text-gray-600 font-opensans">
                    Your personal information is never stored on our servers and is handled with strict confidentiality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#2B2D42] text-3xl mr-4">
                  <FaHandshake />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-righteous">Trusted Payment Partners</h3>
                  <p className="text-gray-600 font-opensans">
                    We work with verified payment processors like M-PESA and PayPal to ensure safe transactions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#FF6B6B] text-3xl mr-4">
                  <FaLock />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-righteous">Transparent Process</h3>
                  <p className="text-gray-600 font-opensans">
                    You'll receive immediate confirmation of your donation and can request a receipt for your records.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm font-opensans">
                By donating, you agree to our secure payment process. We never share your information with third parties.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white text-[#2B2D42]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <FaQuoteLeft className="text-[#2B2D42] text-4xl mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-8 font-righteous leading-relaxed"></blockquote>
            <div className="text-2xl md:text-3xl font-bold mb-8 font-righteous leading-relaxed">
              "Thank you for supporting my dream. Your help is making a real difference in my life and in our communities."
            </div>
            <div className="text-[#FFD166] text-xl font-opensans">
              — Gloria Karen
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}