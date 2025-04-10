import {useState} from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className="bg-[#1E2235] text-white py-3 px-4 md:px-12 fixed top-0 left-0 w-full z-50 md:relative">
      <div className="container h-fit mx-auto flex md:flex-row justify-between items-center">
        
        {/* Left Side: Contact Info */}
        <div className="md:flex hidden flex-col md:flex-row items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-lg" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <span>mytrands@gmail.com</span>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="md:flex hidden items-center gap-2 mt-2 md:mt-0">
          <span className="text-sm font-semibold">Follow Us :</span>
          <a href="#" className="hover:text-gray-400 transition">
            <FaInstagram className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaYoutube className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaFacebookF className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaTwitter className="text-lg" />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <a className=" title-font md:hidden font-medium  text-gray-900">
          <img 
            src={Logo}
            alt="Logo"
            className="w-full h-10 rounded-full object-contain"
          />
        </a>
        <button
          className="md:hidden text-xl"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-[#30a4d2eb] z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 rounded-2xl flex flex-col justify-between items-start p-4`}
      >
        {/* Close Button */}
        <div className="w-full flex flex-col">
          <div className="flex w-full mb-4 justify-end">
        <button className="text-white text-2xl self-end" onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </button>
        </div>

        {/* Sidebar Links */}
        <Link to="/" onClick={() =>setIsSidebarOpen(false)}  className="text-white py-2 px-3 hover:bg-[#1E2235] rounded w-full">Home</Link>
        <Link to="/about" onClick={() =>setIsSidebarOpen(false)}  className="text-white py-2 px-3 hover:bg-[#1E2235] rounded w-full">About Us</Link>
        <Link to="/privacy-and-terms" onClick={() =>setIsSidebarOpen(false)}  className="text-white py-2 px-3 hover:bg-[#1E2235] rounded w-full">Terms & Conditions</Link>
        <Link to="/enquiry" onClick={() =>setIsSidebarOpen(false)} className="text-white py-2 px-3 hover:bg-[#1E2235] rounded w-full">Contact Us</Link>
        </div>

        <div className="space-y-4 w-full border-t border-[#46472d]">
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="text-sm font-semibold">Follow Us :</span>
          <a href="#" className="hover:text-gray-400 transition">
            <FaInstagram className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaYoutube className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaFacebookF className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaTwitter className="text-lg" />
          </a>
        </div>
        <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-lg" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg" />
            <span>mytrands@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
