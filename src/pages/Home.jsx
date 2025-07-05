import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import AboutPreview from '../components/About'
import Achievements from '../components/Highlight'
import SupportGloria from '../components/DonationCTA'
import FoundationLink from '../components/Foundation'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Hero/>
      <AboutPreview/>
      <Achievements/>
      <SupportGloria/>
      <FoundationLink/>
    </div>
  )
}

export default Home
