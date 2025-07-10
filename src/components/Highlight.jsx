// Achievements.jsx
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaTrophy, FaCrown, FaUserTie, FaMusic } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Achievements() {
  const highlights = [
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: 'Kids Influencer of the Year',
      subtitle: 'Miss Independent Kenya 2024',
      bgColor: 'bg-[#FF6B6B]/10',
      borderColor: 'border-[#FF6B6B]',
      iconColor: 'text-[#FF6B6B]',
      image: '/assets/24.jpg',
      alt: 'Gloria receiving influencer award'
    },
    {
      icon: <FaCrown className="w-8 h-8" />,
      title: 'Mini Miss Africa',
      subtitle: 'Continental Pageant Winner',
      bgColor: 'bg-[#FFD166]/10',
      borderColor: 'border-[#FFD166]',
      iconColor: 'text-[#FFD166]',
      image: '/assets/35.jpg', 
      alt: 'Gloria wearing Mini Miss Africa crown'
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: 'CEO & Founder',
      subtitle: 'Gloriasarah Foundation',
      bgColor: 'bg-[#2B2D42]/10',
      borderColor: 'border-[#2B2D42]',
      iconColor: 'text-[#2B2D42]',
      image: '/assets/25.jpg', // Update path
      alt: 'Gloria at foundation event'
    },
    {
      icon: <FaMusic className="w-8 h-8" />,
      title: 'Youngest Performer',
      subtitle: 'National Music Festival',
      bgColor: 'bg-[#FF6B6B]/10',
      borderColor: 'border-[#FF6B6B]',
      iconColor: 'text-[#FF6B6B]',
      image: '/assets/14.jpg', // Update path
      alt: 'Gloria performing on stage'
    }
  ]

  return (
    <section className="py-5 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] font-righteous">
            Latest <span className="text-[#FF6B6B]">Highlights</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto font-opensans">
            Gloria's recent achievements and milestones
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {highlights.map((item, index) => (
              <SwiperSlide key={index}>
                <AchievementCard item={item} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <AchievementCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${item.bgColor} border-t-4 ${item.borderColor} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col`}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className={`${item.iconColor} mb-4`}>
          {item.icon}
        </div>
        <h3 className="text-xl font-bold text-[#2B2D42] mb-2 font-righteous">{item.title}</h3>
        <p className="text-gray-600 font-opensans mt-auto">{item.subtitle}</p>
      </div>
    </motion.div>
  )
}