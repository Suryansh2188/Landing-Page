import React, { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMapClick = (e) => {
    setFormData({
      ...formData,
      location: { lat: e.latLng.lat(), lng: e.latLng.lng() },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await fetch('https://script.google.com/macros/s/your-script-id/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };
  
  return (
    <section className="text-gray-600 body-font relative">
      <div className="relative w-full h-48 mb-6">
  <img
    src="https://img.freepik.com/free-photo/close-up-person-working-call-center_23-2149288225.jpg?ga=GA1.1.1262468584.1738515569&semt=ais_hybrid&w=740"
    alt="Contact Us"
    className="w-full h-full object-cover "
  />
  <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
    <h2 className="text-white text-5xl font-semibold">Contact Us</h2>
  </div>
</div>

      <div className="container px-10 py-6 mx-auto flex flex-wrap sm:flex-nowrap">
        {/* Google Map Section */}
        <div className="lg:w-3/5 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-6 p-6 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          />
          <div className="bg-white relative flex flex-wrap py-4 px-4 rounded shadow-md">
            <div className="lg:w-1/2 px-4">
              <h2 className="title-font font-semibold text-gray-900 text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-sm">123 Business St, City, Country</p>
            </div>
            <div className="lg:w-1/2 px-4 mt-2 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 text-xs">
                EMAIL
              </h2>
              <a href="mailto:example@email.com" className="text-indigo-500 text-sm">
                example@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 text-xs mt-3">
                PHONE
              </h2>
              <p className="text-sm">+123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg flex flex-col md:ml-auto w-full p-6 mt-6 md:mt-0">
          <h2 className="text-gray-900 text-xl font-medium title-font mb-3">Enquiry Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">Message</label>
              <textarea
                name="message"
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-2 border rounded-lg h-20"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-black border-0 py-2 px-6 focus:outline-none rounded-xl text-lg cursor-pointer w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
