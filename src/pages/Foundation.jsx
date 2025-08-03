// FoundationPage.jsx
import { useEffect } from 'react'
import { MdDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function FoundationPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#2B2D42] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center bg-[#FF6B6B]/20 px-4 py-2 rounded-full mb-6 mt-10">
              <MdDateRange className="mr-2" />
              <span className="font-opensans ">Launched December 23, 2023</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-righteous">
              Gloriasarah <span className="text-[#FFD166]">Foundation</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto md:mx-0 font-opensans">
              A nonprofit initiative by Gloria Karen to create lasting change in communities
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img 
              src="/assets/logoG.jpg" 
              alt="Foundation Logo" 
              className="w-64 h-64 object-contain rounded-full border-4 border-[#FFD166]"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-[#2B2D42] mb-6 font-righteous">
              Our Purpose
            </h2>
            <div className="prose max-w-none text-gray-700 font-opensans">
              <p className="text-lg">
                The Gloriasarah Foundation is a nonprofit initiative started by Gloria Karen Wairimu Kimani to support disadvantaged children, families, and the environment. Born from Gloria's compassionate spirit and desire to give back, the foundation focuses on creating sustainable solutions to pressing social challenges.
              </p>
              <p className="text-lg mt-4">
                At just 10 years old, Gloria recognized that true success isn't just about personal achievement, but about lifting others up. The foundation represents her commitment to using her platform to make a tangible difference in people's lives and protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2B2D42] mb-12 font-righteous">
            Our <span className="text-[#FF6B6B]">Mission</span> Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow" >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/assets/2.jpg" 
                  alt="Child & Family Support" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                Child & Family Support
              </h3>
              <p className="text-gray-600 font-opensans">
                We provide essential resources to underprivileged children and their families, including food packages, clothing, school supplies, and household necessities. Our family preservation programs help keep vulnerable families together through difficult times.
              </p>
            </div>

            {/* Mission Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow ">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/assets/F1.jpg" 
                  alt="Education Advocacy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                Education Advocacy
              </h3>
              <p className="text-gray-600 font-opensans">
                We believe education is the foundation for breaking cycles of poverty. Our programs include school fee assistance, literacy campaigns, mentorship programs, and infrastructure improvements for underserved schools. We particularly focus on keeping girls in school.
              </p>
            </div>

            {/* Mission Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#2B2D42]">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/assets/F2.jpg" 
                  alt="Elderly Care Initiatives" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                Elderly Care Initiatives
              </h3>
              <p className="text-gray-600 font-opensans">
                We honor and support senior citizens through regular visits, care packages, and assistance with medical needs. Our intergenerational programs connect youth with elders to share wisdom and combat social isolation among the elderly.
              </p>
            </div>

            {/* Mission Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow ">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/assets/4.jpg" 
                  alt="Nutrition Programs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                Nutrition Programs
              </h3>
              <p className="text-gray-600 font-opensans">
                Our street feeding initiatives provide hot meals to homeless children weekly. We've established community kitchens in underserved areas and run nutrition education programs to help families make the most of limited resources.
              </p>
            </div>

            {/* Mission Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#FFD166]">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/assets/f4.jpg" 
                  alt="Environmental Conservation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                Environmental Conservation
              </h3>
              <p className="text-gray-600 font-opensans">
                Our plastic collection drives have removed over 5,000 kg of waste from communities. We organize monthly tree planting events and environmental education workshops in schools to foster the next generation of eco-conscious citizens.
              </p>
            </div>

            {/* Mission Card 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#2B2D42]">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="/assets/f3.jpg" 
                  alt="Holistic Community Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#2B2D42] mb-3 font-righteous">
                Holistic Community Development
              </h3>
              <p className="text-gray-600 font-opensans">
                We take a comprehensive approach to community upliftment, addressing immediate needs while developing long-term solutions. Our initiatives are designed to create sustainable change through partnerships with local leaders and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-[#FF6B6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 font-righteous">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 font-opensans">
            Your support helps us expand our reach and deepen our impact in communities across Kenya
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/checkout"
              className="bg-white text-[#FF6B6B] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all duration-300 font-opensans"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF6B6B] px-8 py-3 rounded-full font-bold transition-all duration-300 font-opensans"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}