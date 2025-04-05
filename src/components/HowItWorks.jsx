import React, { useRef, useState } from "react";

const HowItWorks = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const customerSteps = [
    "Find Local Shops – Open the MyTrands app or website and explore nearby stores.",
    "	Book Products Online – Browse through store listings and reserve your products.",
    "Visit the Store – Use in-app navigation to reach the shop.",
    "Inspect the Product & Pay in Cash – Check the product, pay in cash, and complete your purchase.",
    ];

  const shopSteps = [
    "Register Your Store – List your business on MyTrands.",
    "Get Notified – Receive notifications for new orders.",
    "Prepare Orders – Get the product ready for the customer.",
    "Complete the Sale – Hand over the product, collect cash, and increase sales.",
    ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Side: Text Content */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            How it Works
          </h2>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
          For Customers:
          </h4>
          <ol className="list-decimal list-inside mb-4">
            {customerSteps.map((step, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {step}
              </li>
            ))}
          </ol>
         
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
          For Shopkeepers:
          </h4>
          <ol className="list-decimal list-inside mb-4">
            {shopSteps.map((step, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {step}
              </li>
            ))}
          </ol>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed font-bold">
          No online payments or delivery hassles are involved, making it safe and efficient for 
          </p>

          {/* Google Play Button */}
          <a href="#" className="inline-block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="w-40"
            />
          </a>
        </div>

        {/* Right Side: Video with Play Button */}
        <div className="relative">
          <video
            ref={videoRef}
            className="w-full rounded-xl shadow-lg"
            controls={isPlaying} // Show controls only after playing
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Play Button (hidden when playing) */}
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex justify-center items-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <polygon points="5,3 19,10 5,17"></polygon>
                </svg>
              </div>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
