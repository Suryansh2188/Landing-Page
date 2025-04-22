import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white body-font">
      <div className="container w-full bg-[#252B42] px-5 py-10 mx-auto flex md:items-center justify-around items-center gap-x-4 md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0  text-center md:text-left">
          <a className=" title-font font-medium  text-gray-900">
            <img
              src={Logo}
              alt="Logo"
              className="w-full h-14 rounded-full object-contain"
            />
          </a>
          <p className="mt-2 text-sm text-white">
          H No. 1 Malka Park Near Big Water Tank, Bulandshahr (U.P.) India
          </p>
        </div>

        <div className="lg:w-fit md:w-1/2 px-0 mt-8 md:mt-0">
          <h2 className="title-font text-white font-medium  tracking-widest text-lg mb-3">
            Company info
          </h2>
          <nav className="list-none mb-10 space-y-2">
            <li>
              <a href="/about" className="text-white ">About Us</a>
            </li>
            <li>
              <a href="/" className="text-white ">Carrier</a>
            </li>
            <li>
              <a href="/" className="text-white ">We are Hiring</a>
            </li>
            <li>
              <a href="/" className="text-white ">Blog</a>
            </li>
          </nav>
        </div>

        <div className="lg:w-fit md:w-1/2 px-0">
          <h2 className="title-font text-white font-medium  tracking-widest text-lg mb-3">
            Features
          </h2>
          <nav className="list-none mb-10 space-y-2">
            <li>
              <a href="/" className="text-white ">Business Marketing</a>
            </li>
            <li>
              <a href="/" className="text-white ">User Analytic</a>
            </li>
            <li>
              <a href="/" className="text-white ">Live Chat</a>
            </li>
            <li>
              <a href="/" className="text-white ">Unlimited Support</a>
            </li>
          </nav>
        </div>
      </div>
    </footer>
  );
}
