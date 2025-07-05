// Footer.jsx
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2B2D42] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Gloria Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 font-righteous text-[#FF6B6B]">About Gloria</h3>
            <p className="text-gray-300 font-opensans">
              Gloria Karen is a young, passionate model, singer, actress, and humanitarian who is proving that no dream is too big for a child. Through her talents and the Gloriasarah Foundation, she continues to shine and serve.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 font-righteous text-[#FF6B6B]">Quick Links</h3>
            <ul className="space-y-2 font-opensans">
              <li><Link to="/" className="text-gray-300 hover:text-[#FFD166] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#FFD166] transition-colors">About Gloria</Link></li>
              <li><Link to="/foundation" className="text-gray-300 hover:text-[#FFD166] transition-colors">Foundation</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-[#FFD166] transition-colors">Donate</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-[#FFD166] transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FFD166] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 font-righteous text-[#FF6B6B]">Contact Info</h3>
            <ul className="space-y-3 font-opensans">
              <li className="flex items-start">
                
                <span className="text-gray-300">Murang'a, Kenya</span>
              </li>
              <li className="flex items-start">
                
                <span className="text-gray-300">+254 712 345 678</span>
              </li>
              <li className="flex items-start">
                
                <a href="mailto:hello@gloriakaren.co.ke" className="text-gray-300 hover:text-[#FFD166] transition-colors">
                  hello@gloriakaren.co.ke
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 font-righteous text-[#FF6B6B]">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/gloriakarenofficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD166] transition-colors text-2xl">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/GloriaKaren" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD166] transition-colors text-2xl">
                <FaYoutube />
              </a>
              <a href="https://facebook.com/GloriaKaren" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD166] transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="https://tiktok.com/@gloriakaren" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#FFD166] transition-colors text-2xl">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 font-opensans">
          <p>© {currentYear} Gloria Karen. All rights reserved. Designed by Emmanuel Kerich</p>
        </div>
      </div>
    </footer>
  )
}