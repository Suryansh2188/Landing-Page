import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I find shops near me?",
    answer: "Enter your location in the app and view nearby shops on the map.",
  },
  {
    question: "How do I book a product?",
    answer: "Select a shop, browse their products, and click \u201cBook Now\u201d to reserve.",
  },
  {
    question: "Can I make an online payment?",
    answer: "No, all payments are made in cash directly at the store.",
  },
  {
    question: "What if I don\u2019t pick up my order?",
    answer: "You must inform the shop if you wish to cancel your booking.",
  },
  {
    question: "How do I navigate to the shop?",
    answer: "Use our in-app map feature for step-by-step navigation to the shop.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto mt-20 px-6 md:px-12 lg:px-20 m-4 grid md:grid-cols-2 gap-10 items-start">
      {/* Left: FAQs */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm transition-all bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="w-4 h-4" />
                ) : (
                  <FaChevronDown className="w-4 h-4" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="rounded-3xl overflow-hidden shadow-lg animate-fadeIn">
        <img
          src="https://img.freepik.com/free-vector/tiny-business-people-with-giant-faq-letters-gadget-users-searching-instructions-useful-information-flat-vector-illustration-customer-support-solution-concept-banner-landing-web-page_74855-23409.jpg?t=st=1743873842~exp=1743877442~hmac=5ad8188c696882864ce6d7d7c4232bc3570db48141c9bf17e2ea1ebec4688c52&w=1480"
          alt="MyTrands FAQs"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
