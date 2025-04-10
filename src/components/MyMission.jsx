import { FaCheckCircle, FaRocket, FaGift, FaChartBar, FaCity, FaHeadset, FaStore, FaShoppingCart, FaHandshake, FaBullseye  } from 'react-icons/fa';

import React from 'react';

export default function MyTrandsMission() {
  return (
    <section className="text-gray-700 body-font bg-white mt-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image Background & Who Benefits */}
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://img.freepik.com/free-vector/agree-concept-illustration_114360-26076.jpg?ga=GA1.1.1262468584.1738515569&semt=ais_hybrid&w=740"
            alt="Who Benefits from MyTrands"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="relative z-20 p-8 text-white bg-blue-900/70 backdrop-blur-md">
          
            <h2 className="text-3xl font-bold mb-4">Who Benefits from <span className="text-blue-300">MyTrands?</span></h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">For Customers:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 animate-fadeIn">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Find Nearby Stores – Discover local shops instead of searching online for products.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-100">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Fast & Convenient Shopping – No waiting for deliveries—just book and pick up.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-200">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Safe Payment Options – No online payment fraud, as transactions happen in cash.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-300">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Better Deals & Discounts – Get the best offers directly from local stores.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-400">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Save Time – Book your order and collect it whenever it suits you.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">For Shopkeepers:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 animate-fadeIn">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Increase Online Visibility – Get discovered by more customers without expensive marketing.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-100">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Direct Customer Interaction – Customers can find and visit your store easily.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-200">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Zero Extra Marketing Costs – Grow your business without spending extra on ads.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-300">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Better Inventory Management – Update your product listings in real time.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-400">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Cash Payments for Hassle-Free Transactions – No dependency on online payments.
                </li>
                <li className="flex items-start gap-3 animate-fadeIn delay-500">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  Customer Reviews & Ratings – Gain trust and improve service based on feedback.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Mission & Future */}
        <div className="rounded-3xl bg-gray-50 p-8 shadow-xl animate-slideUp">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
        MyTrands' <span className="text-blue-500">Mission and Future</span>
</h2>
<div className="space-y-5 mb-10">
  <div className="flex gap-4 items-start">
    {/* <FaBullseye className="text-blue-500 mt-1" /> */}
    <p>
      <strong>MyTrands is not just an e-commerce platform</strong>, but a mission to empower local businesses. In today’s digital era, big companies dominate the market, making it hard for small shopkeepers to compete. MyTrands gives them a fighting chance.
    </p>
  </div>
  <div className="flex gap-4 items-start">
    <FaStore className="text-indigo-500 mt-1" />
    <p>
      <strong>Digitize every small business</strong> – Helping them compete with big brands.
    </p>
  </div>
  <div className="flex gap-4 items-start">
    <FaShoppingCart className="text-green-500 mt-1" />
    <p>
      <strong>Make shopping easy for customers</strong> – No delivery fees or online payment issues.
    </p>
  </div>
  <div className="flex gap-4 items-start">
    <FaHandshake className="text-purple-500 mt-1" />
    <p>
      <strong>Strengthen the local economy</strong> – Encouraging people to support small businesses.
    </p>
  </div>
</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What’s Next for <span className="text-blue-500">MyTrands?</span></h2>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <FaRocket className="text-blue-500 mt-1" />
              <p><strong>AI-Powered Recommendations</strong> – Personalized product and store suggestions.</p>
            </div>
            <div className="flex gap-4 items-start">
              <FaGift className="text-pink-500 mt-1" />
              <p><strong>Reward & Loyalty Programs</strong> – Exclusive offers for repeat customers.</p>
            </div>
            <div className="flex gap-4 items-start">
              <FaChartBar className="text-purple-500 mt-1" />
              <p><strong>Business Analytics</strong> – Tools to help shopkeepers analyze sales and inventory.</p>
            </div>
            <div className="flex gap-4 items-start">
              <FaCity className="text-indigo-500 mt-1" />
              <p><strong>Expanding to More Cities</strong> – Bringing digital transformation to small businesses nationwide.</p>
            </div>
            <div className="flex gap-4 items-start">
              <FaHeadset className="text-teal-500 mt-1" />
              <p><strong>Improved Customer Support</strong> – Easy complaint resolution and chat support.</p>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            {/* <h3 className="text-2xl font-semibold text-gray-800 mb-2">Conclusion</h3> */}
            <p className="text-gray-700">
              MyTrands is not just an app—it’s a revolution that will empower local businesses and transform shopping for customers. It’s designed for those who are tired of online shopping problems and want a faster, safer, and more reliable way to shop from nearby stores.
            </p>
            <p className="mt-4 text-blue-600 font-semibold text-lg">
              "Local Shopping, the Smart Way – with MyTrands!" 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
