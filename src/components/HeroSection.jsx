import React from "react";
import HeroImage from "../assets/images/hero.svg";

const HeroSection = () => {
  return (
    <section className="relative w-full  flex items-center justify-center bg-gradient-to-r from-[#A0E4FF] to-[#7EE0C9] overflow-hidden">
      {/* Large Transparent Circle */}
      <div className="absolute w-[80vmin] h-[80vmin] bg-white opacity-10 rounded-full top-96  right-24 transform -translate-y-1/2"></div>
      {/* Small Floating Circles */}
      <div className="absolute -top-6 right-36 w-16 h-16 bg-white opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 right-11 w-16 h-16 bg-white opacity-20 rounded-full"></div>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* <p className="text-gray-700 uppercase tracking-widest text-sm">
          
          </p> */}
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Discover & Shop Locally – Book Online, Pick Up Offline!
          </h1>
          <p className="text-gray-600 text-xl my-6">
          Find nearby shops on the map, book products online, and pay in cash at the store.
          </p>
          <button className="mt-4 mb-3 px-6 py-3 bg-[#6D7DD8] text-white font-semibold rounded-sm shadow-lg hover:bg-blue-700 transition">
          Find Nearby Shops | List Your Shop
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2  flex justify-center">
          <img
            src={HeroImage} 
            alt="Hero"
            className="w-full h-[30rem] max-w-md lg:max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
