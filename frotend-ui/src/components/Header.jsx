import React from "react";
import { FiSearch, FiSliders } from 'react-icons/fi';
import nasaLogo from '../assets/nasa-logo.png'; // Make sure you have this logo in assets

// src/components/Header.jsx
// ...
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-nasa-dark-gray bg-nasa-sidebar-bg/60 backdrop-blur-sm"> {/* Added custom colors and blur */}
      <div className="flex items-center gap-3"> {/* Adjusted gap */}
        <img src={nasaLogo} alt="NASA Logo" className="h-10 w-10" /> {/* Slightly smaller logo */}
        <h1 className="text-xl font-semibold tracking-wide text-nasa-light-gray">NASA Bioscience Explorer</h1> {/* Adjusted font size/weight */}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-nasa-gray" />
          <input
            type="text"
            placeholder="Search for publications..."
            className="w-80 bg-nasa-dark-gray border border-nasa-border rounded-lg py-2 pl-10 pr-4 text-nasa-light-gray focus:outline-none focus:ring-1 focus:ring-nasa-accent-cyan"
          />
          <FiSliders className="absolute top-1/2 right-3 -translate-y-1/2 text-nasa-gray" />
        </div>
        <div className="relative inline-block w-12 h-6 bg-nasa-dark-gray rounded-full cursor-pointer">
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-nasa-accent-cyan rounded-full transition-transform transform translate-x-6"></div>
        </div>
      </div>
    </header>
  );
};
// ...

export default Header;