// AboutPage.jsx
import { FaMicrophone, FaTheaterMasks, FaChild, FaTshirt, FaCamera, FaVideo, FaTrophy, FaHeart, FaGlobeAfrica } from 'react-icons/fa'
import { IoMdRibbon } from 'react-icons/io'
import { GiAfrica } from 'react-icons/gi'
import { useEffect } from 'react';

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] py-30 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-righteous">
            Gloria Karen's Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-opensans">
            Raw. Inspiring. Authentic. The journey of Kenya's youngest multi-talented star.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#2B2D42] mb-6 font-righteous">
                Biography
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl text-[#FF6B6B] font-righteous">Gloriakaren Wairimu Kimani</h3>
                <p className="text-gray-600 font-opensans">Born: August 14, 2014</p>
              </div>
              
              <blockquote className="border-l-4 border-[#FFD166] pl-6 py-2 my-8">
                <p className="text-xl italic text-gray-800 font-opensans">
                  "I'm just getting started — and I believe in dreaming big!"
                </p>
              </blockquote>
              
              <p className="text-lg text-gray-700 mb-6 font-opensans">
                At just 10 years old, Gloria Karen has already established herself as a multi-talented 
                force in Kenya's entertainment industry. Her journey exemplifies how passion, 
                determination, and support can help a young talent shine.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/24.jpg" 
                    alt="Gloria Karen" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#FFD166] text-[#2B2D42] px-4 py-2 font-bold font-righteous text-sm">
                  AGE 10 • KENYA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What She Does Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2B2D42] mb-12 text-center font-righteous">
            What She Does
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <TalentCard icon={<FaMicrophone className="w-8 h-8" />} title="Musician" />
            <TalentCard icon={<FaTheaterMasks className="w-8 h-8" />} title="Actress" />
            <TalentCard icon={<FaChild className="w-8 h-8" />} title="Dancer" />
            <TalentCard icon={<FaTshirt className="w-8 h-8" />} title="Model" />
            <TalentCard icon={<FaCamera className="w-8 h-8" />} title="Kid Influencer" />
            <TalentCard icon={<FaVideo className="w-8 h-8" />} title="Content Creator" />
          </div>
        </div>
      </section>

      {/* How It Started Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2B2D42] mb-8 text-center font-righteous">
            How It Started
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-40 h-40 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center">
                <GiAfrica className="w-20 h-20 text-[#FF6B6B]" />
              </div>
            </div>
            
            <div className="text-start md:text-left">
              <p className="text-lg text-gray-700 font-opensans">
                Gloria's journey began at just 6 years old, singing and modeling her way into the hearts of audiences. 
                Her first pageant was Little Mr & Miss Murang'a in 2020, where her natural charisma and stage presence 
                were immediately evident. Despite her young age, Gloria demonstrated a maturity beyond her years, 
                captivating judges and audiences alike. This initial success fueled her passion for performance, 
                and she's never looked back since.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pageantry Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2B2D42] mb-12 text-center font-righteous">
            Pageantry Journey
          </h2>
          
          <div className="space-y-8">
            <TimelineItem 
              icon={<IoMdRibbon className="text-[#FF6B6B]" />}
              year="2020"
              title="Little Miss Murang'a"
              description="Best Casual Wear, 1st Runners-up"
            />
            <TimelineItem 
              icon={<IoMdRibbon className="text-[#FFD166]" />}
              year="2021"
              title="Little Miss Kenya"
              description="2nd Princess"
            />
            <TimelineItem 
              icon={<IoMdRibbon className="text-[#FF6B6B]" />}
              year="2022"
              title="Miss Fashionista Kenya"
              description="Preteen Miss Fashionista"
            />
            <TimelineItem 
              icon={<IoMdRibbon className="text-[#2B2D42]" />}
              year="2022"
              title="Face of Grandeur Kenya"
              description="1st Runners-up"
            />
            <TimelineItem 
              icon={<IoMdRibbon className="text-[#FFD166]" />}
              year="2023"
              title="Miss Murang'a 2"
              description="Preteen Miss Murang'a"
            />
            <TimelineItem 
              icon={<FaGlobeAfrica className="text-[#FF6B6B]" />}
              year="2023"
              title="Little Miss Africa"
              description="Mini Miss Africa"
            />
            <TimelineItem 
              icon={<FaTrophy className="text-[#FFD166]" />}
              year="2024/2025"
              title="Miss Independent Kenya"
              description="Kids Influencer of the Year"
            />
          </div>
        </div>
      </section>

      {/* Vision + Dreams Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaHeart className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6 font-righteous">
            Vision & Dreams
          </h2>
          
          <p className="text-xl mb-8 font-opensans">
            Gloria dreams of continually growing in her talents, helping other kids through her foundation, 
            and representing Kenya on global platforms, like the upcoming Little Miss Universe 2025 in India. 
            She envisions using her platform to inspire African children to pursue their dreams fearlessly, 
            while making meaningful contributions to her community through the Gloriasarah Foundation.
          </p>
          
          <p className="text-lg font-opensans">
            "I want to show the world what Kenyan and African talent looks like, 
            and prove that age is just a number when you have passion and determination."
          </p>
        </div>
      </section>
    </div>
  )
}

function TalentCard({ icon, title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
      <div className="text-[#FF6B6B] mb-3 flex justify-center">
        {icon}
      </div>
      <h3 className="font-bold text-[#2B2D42] font-opensans">{title}</h3>
    </div>
  )
}

function TimelineItem({ icon, year, title, description }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#FF6B6B]">
          {icon}
        </div>
        <div className="w-px h-full bg-gray-300 mt-2"></div>
      </div>
      <div className="pt-1 pb-8">
        <p className="text-sm text-gray-500 font-opensans">{year}</p>
        <h3 className="text-lg font-bold text-[#2B2D42] font-righteous">{title}</h3>
        <p className="text-gray-600 font-opensans">{description}</p>
      </div>
    </div>
  )
}