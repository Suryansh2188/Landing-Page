import React from "react";
import AboutImg1 from "../assets/images/about-img1.jpeg";
import AboutImg2 from "../assets/images/about-img2.jpeg";
import SalesCard from "./SalesCard";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Images & Cards */}
          <div className="lg:w-1/2 flex gap-2">
            <div className="w-1/2 flex flex-col items-end gap-2 my-16">
              <img
                src={AboutImg1}
                alt="Team Working"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="bg-white rounded-lg shadow-md flex flex-col items-start space-x-2 w-36 p-4">
                <p className="text-sm font-medium mb-2">Best ratings</p>
                <div className="flex flex-col space-y-1 my-1">
                <div className="w-16 bg-gray-300 rounded-xl p-1 "></div>
                <div className="w-14 bg-gray-300 rounded-xl p-1"></div>
                </div>
                <div className="flex space-x-1 mt-1">
                  <span>😡</span>
                  <span>😐</span>
                  <span>😊</span>
                  <span>😁</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-start gap-2">
              <SalesCard />
              {/* <div className="bg-white rounded-lg shadow-md flex flex-col items-start space-x-2 w-36">
              </div> */}
              <img
                src={AboutImg2}
                alt="Team Working"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              <img
                src={AboutImg1}
                alt="Team Working"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <img
                src={AboutImg2}
                alt="Office Meeting"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div> */}

            {/* Floating Stats Card */}
            {/* <div className="absolute top-4  right-4 bg-white p-4 rounded-lg shadow-lg w-40 sm:w-52">
              <h3 className="text-xl font-bold">30,000+</h3>
              <p className="text-gray-600 text-sm">
                Sales in July 2025 with 5-star ratings and happy clients.
              </p>
              <div className="flex mt-2 space-x-2">
                
                <img src="/assets/images/user1.png" alt="User" className="w-6 h-6 rounded-full border" />
                <img src="/assets/images/user2.png" alt="User" className="w-6 h-6 rounded-full border" />
                <img src="/assets/images/user3.png" alt="User" className="w-6 h-6 rounded-full border" />
              </div>
            </div> */}

            {/* Floating Ratings Card */}
            {/* <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md flex items-center space-x-2 w-32">
              <p className="text-sm font-medium">Best ratings</p>
              <div className="flex space-x-1">
                <span>😡</span>
                <span>😐</span>
                <span>😊</span>
                <span>😁</span>
              </div>
            </div> */}
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-600">
            MyTrands is an innovative platform that combines the best of online and offline shopping. It bridges the gap between local shopkeepers and customers, providing a seamless shopping experience without the hassles of traditional e-commerce.
            </p>
            <p className="mt-2 text-gray-600">
            When we look at conventional online shopping, we see multiple challenges—delayed deliveries, product quality issues, refund hassles, and online payment risks. MyTrands eliminates these problems and offers a safe, fast, and convenient shopping experience.
            </p>
            <button className="bg-[#6877E5] mt-4 text-white text-sm font-bold py-3 px-6 shadow-md transform rounded-xl skew-x-[-10deg] hover:bg-[#5a69d4] transition-all">
      <span className="inline-block transform skew-x-[10deg]">EXPLORE MORE</span>
    </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
