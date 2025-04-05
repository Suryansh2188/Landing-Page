import React from "react";

const GradientBackground = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#A0E4FF] to-[#7EE0C9] overflow-hidden">
      {/* Large Transparent Circle */}
      <div className="absolute w-[50%] h-[80%] bg-white opacity-10 rounded-full top-1/2 right-10 transform -translate-y-1/2"></div>

      {/* Small Floating Circles */}
      <div className="absolute top-16 left-10 w-10 h-10 bg-white opacity-20 rounded-full"></div>
      <div className="absolute bottom-20 right-32 w-16 h-16 bg-white opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white opacity-20 rounded-full"></div>

      <h1 className="text-3xl font-bold text-white z-10">New Collection</h1>
    </div>
  );
};

export default GradientBackground;
