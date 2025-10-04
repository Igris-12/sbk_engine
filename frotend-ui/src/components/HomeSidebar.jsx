// src/components/HomeSidebar.jsx
import React from 'react';
import { FiHome, FiBookOpen, FiZap, FiGitBranch, FiTarget, FiUser } from 'react-icons/fi';
import { FaDna } from 'react-icons/fa';

const SidebarItem = ({ icon, text, active }) => (
  <a href="#" className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-colors text-base
      ${active ? 'bg-accent-teal/20 text-accent-teal font-medium shadow-md' : 'text-text-muted hover:bg-space-light hover:text-text-light'}`
    }>
    {icon}
    <span>{text}</span>
  </a>
);

const HomeSidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-space-card/70 border border-space-border rounded-xl p-5 backdrop-blur-md shadow-lg h-full transition-all duration-300">
      <nav className="flex flex-col gap-3">
        <SidebarItem icon={<FiHome size={20} />} text="Overview" active />
        <SidebarItem icon={<FiUser size={20} />} text="Species" />
        <SidebarItem icon={<FiZap size={20} />} text="Stic Filter" />
        <SidebarItem icon={<FiGitBranch size={20} />} text="Knowledge Graph" />
        <SidebarItem icon={<FiBookOpen size={20} />} text="Insights & Summaries" />
        <SidebarItem icon={<FiTarget size={20} />} text="Mission Relevance" />
      </nav>
    </aside>
  );
};

export default HomeSidebar;