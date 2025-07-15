import { FaBullhorn, FaMedal, FaHandshake } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function SponsorshipPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sponsorshipOptions = [
    {
      
      title: "Event Sponsorship",
      description: "Sponsor Gloria's performances, pageants, or foundation events",
      benefits: [
        "Logo placement on event materials",
        "Social media recognition",
        "VIP tickets to events"
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Concert event with crowd"
    },
    {
      
      title: "Program Sponsorship",
      description: "Sponsor specific foundation programs like education initiatives or environmental projects",
      benefits: [
        "Naming rights for programs",
        "Impact reports",
        "Participation in program activities"
      ],
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Children learning in classroom"
    },
    {
      
      title: "Corporate Partnership",
      description: "Long-term partnership with Gloria's brand and foundation",
      benefits: [
        "Exclusive partnership status",
        "Co-branded marketing",
        "Employee engagement opportunities"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Business people shaking hands"
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-25 md:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 font-righteous">
            Sponsorship <span className="text-[#FFD166]">Opportunities</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-opensans">
            Align your brand with Gloria's inspiring journey and social impact
          </p>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sponsorshipOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={option.image}
                    alt={option.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#FF6B6B] mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-opensans">
                    {option.description}
                  </p>
                  <h4 className="font-bold text-[#2B2D42] mb-2 font-opensans">Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FF6B6B] mr-2">•</span>
                        <span className="text-gray-600 font-opensans">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sponsorship Inquiry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-6 font-righteous text-center">
              Sponsorship Inquiry
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2 font-opensans">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-gray-700 mb-2 font-opensans">Contact Person</label>
                  <input
                    type="text"
                    id="contact"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-opensans">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-opensans">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-gray-700 mb-2 font-opensans">Sponsorship Interest</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                >
                  <option>Event Sponsorship</option>
                  <option>Program Sponsorship</option>
                  <option>Corporate Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-opensans">Your Proposal</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                  placeholder="Tell us about your organization and sponsorship interests"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#2B2D42] hover:bg-[#1A1C2E] text-white py-4 px-6 rounded-lg font-bold transition-colors font-opensans"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}