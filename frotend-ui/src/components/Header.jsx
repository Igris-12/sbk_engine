import React from 'react';
import { Link } from 'react-router-dom';
import nasaLogo from '../assets/nasa-logo.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 px-8 border-b border-slate-700 bg-slate-950/90 backdrop-blur-md fixed w-full top-0 z-50 shadow-2xl">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img src={nasaLogo} alt="NASA Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold tracking-wide text-slate-100">NASA Bioscience Explorer</h1>
      </Link>
    </header>
  );
};

export default Header;
