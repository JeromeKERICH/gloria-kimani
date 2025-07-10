// OtherWaysToHelp.jsx
import { FaHandsHelping, FaShareAlt, FaShoppingCart, FaBullhorn } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function OtherWaysToHelp() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  const waysToHelp = [
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Volunteer",
      description: "Offer your time and skills to support Gloria's events and foundation activities",
      action: "Join our volunteer team",
      link: "/volunteer",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Group of volunteers working together"
    },
    
    {
      icon: <FaShoppingCart className="text-4xl" />,
      title: "Purchase Merchandise",
      description: "Support through buying Gloria's branded merchandise (coming soon)",
      action: "Join Waitlist",
      link: "/shop",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Branded merchandise on display"
    },
    {
      icon: <FaBullhorn className="text-4xl" />,
      title: "Sponsor an Event",
      description: "Businesses can sponsor Gloria's performances or foundation initiatives",
      action: "Learn about sponsorship",
      link: "/sponsorship",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Sponsorship banner at an event"
    }
  ]

  return (
    <div className="bg-gray-50 md:py-10 py-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-righteous">
            Other Ways to <span className="text-[#FFD166]">Help</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-opensans">
            Financial donations aren't the only way to support Gloria's journey
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waysToHelp.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-shadow flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={way.image}
                    alt={way.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[#FF6B6B] mb-4 flex justify-center">
                    {way.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                    {way.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-opensans">
                    {way.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={way.link}
                      className="inline-block w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white py-2 px-6 rounded-full font-medium transition-colors font-opensans text-center"
                    >
                      {way.action}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-5 md:py-10 bg-[#2B2D42] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-righteous">
            Have Another Idea to Help?
          </h2>
          <p className="text-xl mb-8 font-opensans max-w-2xl mx-auto">
            We're open to creative collaborations and partnerships
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FFD166] hover:bg-[#FFC233] text-[#2B2D42] py-3 px-8 rounded-full font-bold transition-colors font-opensans"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}