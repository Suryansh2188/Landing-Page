import React from 'react'
import HeroSection from '../../components/HeroSection'
import AboutUs from '../../components/AboutUs'
import Footer from '../../components/Footer'
import Testimonial from '../../components/Testimonial'
import HowItWorks from '../../components/HowItWorks'
import MyTrandsMission from '../../components/MyMission'
import FAQ from '../../components/FAQ'
import Testimonial2 from '../../components/Testimonial2'
// import Header from '../../components/Header'

export default function Home() {
  return (
    <>
   <HeroSection />
   <AboutUs />
   <HowItWorks />
   <MyTrandsMission />
   <FAQ />
   <Testimonial2 />
   {/* <Header />
   {/* <Footer /> */}
   </>
  )
}
