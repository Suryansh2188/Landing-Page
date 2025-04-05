import React from "react";
import TestimonialImage from "../assets/images/testimonial-img.jpeg";
import ProfilePic from "../assets/images/profile-pic.jpeg";

const Testimonial = () => {
  return (
    <section className="py-12 px-6 md:px-1 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
      <div className="bg-gray-100 rounded-3xl p-3 relative shadow-lg">
        <img
          src={TestimonialImage}
          alt="Testimonial"
          className="w-full h-96 object-cover rounded-2xl"
        />
        <div className="absolute inset-0 border-4 border-white rounded-3xl opacity-20"></div>
      </div>
    </div>

        {/* Right Side - Testimonial Content */}
        <div className="flex flex-col md:flex-row items-start gap-4">
      {/* User Avatar */}
      <img
        src={ProfilePic}
        alt="Regina Miles"
        className="w-12 h-12 rounded-full"
      />

      {/* Testimonial Text Content */}
      <div>
        {/* Rating Stars */}
        <div className="flex space-x-1">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-yellow-400 text-xl opacity-50">★</span>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-800 text-xl font-semibold mt-2">
          Slate helps you see how many more days <br />
          you need to work to reach your financial <br />
          goal.
        </p>

        {/* User Name & Role */}
        <p className="text-blue-600 font-bold mt-2">Regina Miles</p>
        <p className="text-gray-500">Designer</p>
      </div>
    </div>

      </div>
    </section>
  );
};

export default Testimonial;
