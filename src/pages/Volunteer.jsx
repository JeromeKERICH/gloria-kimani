import { FaHandsHelping, FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function VolunteerPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const volunteerOpportunities = [
    {
      
      title: "Event Volunteers",
      description: "Help at Gloria's performances and foundation events with setup, registration, and guest assistance",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Volunteers helping at an event"
    },
    {
     
      title: "Program Volunteers",
      description: "Assist with ongoing foundation programs like environmental cleanups and school visits",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Volunteers planting trees"
    },
    {
      
      title: "Skill-Based Volunteers",
      description: "Offer your professional skills in areas like photography, social media, or mentoring",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Team working together"
    }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white py-25 md:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 font-righteous">
            Volunteer <span className="text-[#FFD166]">Opportunities</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-opensans">
            Join Gloria's team of passionate volunteers making a difference
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
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
                    src={opportunity.image}
                    alt={opportunity.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#FF6B6B] mb-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-opensans">
                    {opportunity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Volunteer Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-[#2B2D42] mb-6 font-righteous text-center">
              Join Our Volunteer Team
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-opensans">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-opensans">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-gray-700 mb-2 font-opensans">Area of Interest</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                >
                  <option>Event Volunteering</option>
                  <option>Program Volunteering</option>
                  <option>Skill-Based Volunteering</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="skills" className="block text-gray-700 mb-2 font-opensans">Skills/Experience</label>
                <textarea
                  id="skills"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                  placeholder="Tell us about your skills and any relevant experience"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white py-4 px-6 rounded-lg font-bold transition-colors font-opensans"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}