// src/components/Header.jsx
import { FiSearch, FiSliders } from 'react-icons/fi';
import nasaLogo from '../assets/nasa-logo.png';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 px-8 border-b border-space-border bg-space-card/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-lg">
      <div className="flex items-center gap-3">
        <img src={nasaLogo} alt="NASA Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold tracking-wide text-text-light">NASA Bioscience Explorer</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search for publications..."
            className="w-96 bg-space-light border border-space-border rounded-full py-2.5 pl-10 pr-4 text-text-light placeholder-text-muted
                       focus:outline-none focus:ring-2 focus:ring-accent-teal transition-all duration-200"
          />
          <FiSliders className="absolute top-1/2 right-3 -translate-y-1/2 text-text-muted cursor-pointer hover:text-text-light" />
        </div>
        {/* Toggle switch for theme or other settings */}
        <div className="relative inline-block w-14 h-7 bg-space-light rounded-full cursor-pointer p-1 transition-all duration-200 shadow-inner-lg">
          <div className="absolute w-5 h-5 bg-accent-teal rounded-full transition-transform transform translate-x-0 group-hover:translate-x-full"></div>
          {/* You'd add logic here to toggle the translate-x-6 class for 'on' state */}
        </div>
      </div>
    </header>
  );
};

export default Header;