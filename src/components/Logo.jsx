import React from 'react';
import logo from '../assets/logo-img.svg'; // Adjust the path as necessary

const Logo = ({ width = '100px', height = '100px', altText = 'Company Logo' }) => {
  return (
    <img
      src={logo}
      alt={altText}
      className={`w-${width} h-${height} object-contain`}
    />
  );
};

export default Logo;
