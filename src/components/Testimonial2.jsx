import React from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Happy Customer",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    message:
      "This app has completely changed the way I shop! I can easily find nearby stores, book products online, and pick them up at my convenience. No more waiting for deliveries!",
  },
  {
    name: "Pooja Sharma",
    role: "Frequent Shopper",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    message:
      "I love how I can see ratings of different shops before booking. It helps me find the best deals and ensures quality products every time!",
  },
  {
    name: "Anil Verma",
    role: "Local Shopkeeper",
    image: "https://randomuser.me/api/portraits/men/69.jpg",
    message:
      "Since joining this platform, I have seen more customers visiting my shop. The app helps me get more sales without any extra marketing costs!",
  },
];

export default function Testimonial2() {
  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap -m-4 justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 w-full p-4">
              <div className="h-full bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                <img
                  alt="testimonial"
                  className="w-24 h-24 mb-4 object-cover object-center rounded-full mx-auto border-4 border-indigo-100 shadow-md"
                  src={testimonial.image}
                />
                <p className="leading-relaxed text-sm text-gray-700 italic">
                  "{testimonial.message}"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-2" />
                <h2 className="text-gray-900 font-semibold tracking-wide text-md">
                  {testimonial.name}
                </h2>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
