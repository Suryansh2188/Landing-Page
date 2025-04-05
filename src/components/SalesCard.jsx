import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const SalesCard = () => {
  const users = [
    { img: "https://randomuser.me/api/portraits/men/1.jpg", name: "John" },
    { img: "https://randomuser.me/api/portraits/women/2.jpg", name: "Emma" },
    { img: "https://randomuser.me/api/portraits/men/3.jpg", name: "Mike" },
    { initials: "R", name: "Robert" },
    { initials: "FJ", name: "Fiona" },
    { initials: "S", name: "Sam" },
    { img: "https://randomuser.me/api/portraits/women/4.jpg", name: "Sophia" },
    { initials: "JJ", name: "James" },
    { initials: "QV", name: "Quinn" },
    { img: "https://randomuser.me/api/portraits/men/5.jpg", name: "David" },
    { initials: "IU", name: "Isabella" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl px-6 py-9 w-52">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">500+</h2>
        <FiArrowUpRight className="text-indigo-500 w-5 h-5" />
      </div>
      <p className="text-gray-500 text-sm mt-1">
      Local Shops Listed Nearby You! Explore To Download
      </p>

      {/* Separator */}
      <div className="border-t border-[#FB9F6D] my-3"></div>

      {/* User Avatars */}
      <div className="flex flex-wrap gap-2">
        {users.map((user, index) => (
          <div key={index} className="w-3 h-3 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-white">
            {user.img ? (
              <img src={user.img} alt={user.name} className="w-full h-full rounded-full object-cover" />
            ) : (
              <span className="bg-orange-500 w-full h-full flex items-center justify-center rounded-full">
                {user.initials}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesCard;
