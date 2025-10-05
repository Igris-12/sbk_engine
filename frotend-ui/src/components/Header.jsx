import React from 'react';
import { Link } from 'react-router-dom'; // 1. Make sure to import Link

const Header = ({ onSearch }) => {
  return (
    <header className="flex items-center justify-between p-4 px-8 border-b border-slate-700 bg-slate-950/90 backdrop-blur-md fixed w-full top-0 z-50 shadow-2xl">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        {/* Replace with your logo if you have one */}
        <h1 className="text-2xl font-bold tracking-wide text-slate-100">NASA Bioscience Explorer</h1>
      </Link>
      
      {/* Your search functionality can remain here */}
      
      <div className="flex items-center gap-4">
        {/* 2. Use Link for client-side navigation */}
        <Link
          to="/login"
          className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-2 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400 transition-all hover:scale-105"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;