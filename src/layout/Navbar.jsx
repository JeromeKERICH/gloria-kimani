// Navbar.jsx
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-[#FF6B6B] font-righteous">
              Gloria Karen
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-[#FF6B6B] px-3 py-2 font-medium transition-colors font-opensans"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-[#FF6B6B] px-3 py-2 font-medium transition-colors font-opensans"
            >
              About Gloria
            </Link>
            <Link 
              to="/foundation" 
              className="text-gray-800 hover:text-[#FF6B6B] px-3 py-2 font-medium transition-colors font-opensans"
            >
              Foundation
            </Link>
            <Link 
              to="/donate" 
              className="text-gray-800 hover:text-[#FF6B6B] px-3 py-2 font-medium transition-colors font-opensans"
            >
              Donate
            </Link>
            <div className="relative">
              <Link 
                to="/gallery" 
                className="text-gray-800 hover:text-[#FF6B6B] px-3 py-2 font-medium transition-colors font-opensans"
              >
                Gallery
              </Link>
            </div>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-[#FF6B6B] px-3 py-2 font-medium transition-colors font-opensans"
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="ml-2 bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-6 py-2 rounded-full font-medium transition-colors shadow-sm font-opensans"
            >
              Support Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#FF6B6B] focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-800 hover:text-[#FF6B6B] font-medium font-opensans"
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-800 hover:text-[#FF6B6B] font-medium font-opensans"
            >
              About Gloria
            </Link>
            <Link
              to="/foundation"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-800 hover:text-[#FF6B6B] font-medium font-opensans"
            >
              Foundation
            </Link>
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-800 hover:text-[#FF6B6B] font-medium font-opensans"
            >
              Donate
            </Link>
            <div className="relative">
              <Link
                to="/gallery"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-800 hover:text-[#FF6B6B] font-medium font-opensans"
              >
                Gallery
              </Link>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-800 hover:text-[#FF6B6B] font-medium font-opensans"
            >
              Contact
            </Link>
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="block mt-2 w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-6 py-2 rounded-full font-medium transition-colors shadow-sm text-center font-opensans"
            >
              Support Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}