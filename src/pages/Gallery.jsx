// GalleryAndGetInvolved.jsx
import { FaHandsHelping, FaTree, FaSchool, FaUtensils, FaUserFriends, FaWindowRestore } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const galleryItems = [
  {
    category: 'Volunteering Events',
    icon: <FaHandsHelping className="text-3xl" />,
    images: [
      { id:1, src: "/assets/34.jpg", alt: 'Volunteers packing supplies' },
      { id: 2, src: "/assets/2.jpg", alt: 'Community cleanup day' },
      { id: 3, src: "/assets/13.jpg", alt: 'Volunteer training session' }
    ],
    description: 'Our volunteers are the heart of the foundation, participating in regular community service projects and outreach programs.'
  },
  
  {
    category: 'Feeding Programs',
    icon: <FaUtensils className="text-3xl" />,
    images: [
      { id: 10, src: "/assets/25.jpg", alt: 'Community kitchen serving meals' },
      { id: 11, src: "/assets/3.jpg", alt: 'Food package distribution' },
      { id: 12, src: "/assets/12.jpg", alt: 'Nutrition workshop' }
    ],
    description: 'Our feeding programs provide nutritious meals to over 500 children and families each month.'
  }
]

export default function GalleryAndGetInvolved() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
      {/* Photo Gallery Section */}
      <section className="py-30 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] font-righteous">
              Activity <span className="text-[#FF6B6B]">Highlights</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-opensans">
              See the impact of Gloriasarah Foundation in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6 text-center">
                  <div className="text-[#FF6B6B] mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                    {item.category}
                  </h3>
                  <p className="text-gray-600 mb-4 font-opensans">
                    {item.description}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-1">
                {item.images.map((img) => (
                    <img 
                        key={img.id}
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                    />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-[#FFD166]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-[#2B2D42] text-white p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 font-righteous">
                    Partner <span className="text-[#FFD166]">With Us</span>
                  </h2>
                  <p className="text-lg mb-6 font-opensans">
                    Whether you want to volunteer, donate, or collaborate, your support helps us expand our impact.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaUserFriends className="text-[#FFD166] text-xl mt-1 mr-3" />
                      <div>
                        <h4 className="font-bold font-righteous">Volunteer Opportunities</h4>
                        <p className="text-gray-300 font-opensans">Join our monthly activities or special projects</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaHandsHelping className="text-[#FFD166] text-xl mt-1 mr-3" />
                      <div>
                        <h4 className="font-bold font-righteous">Corporate Partnerships</h4>
                        <p className="text-gray-300 font-opensans">Align your brand with our social mission</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#2B2D42] mb-6 font-righteous">
                  Get Involved Today
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1 font-opensans">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1 font-opensans">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-gray-700 mb-1 font-opensans">Interest</label>
                    <select
                      id="interest"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    >
                      <option>Volunteering</option>
                      <option>Partnership</option>
                      <option>Donation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-1 font-opensans">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white py-3 px-6 rounded-lg font-bold transition-colors font-opensans"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}