import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBookOpen, FiZap, FiGitBranch, FiTarget, FiUser } from 'react-icons/fi';

const SidebarItem = ({ icon, text, to }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-5 py-3 rounded-lg transition-colors text-base text-text-muted hover:bg-space-light hover:text-text-light"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const HomeSidebar = () => (
  <aside className="w-64 flex-shrink-0 bg-space-card/70 border border-space-border rounded-xl p-5 backdrop-blur-md shadow-lg h-full transition-all duration-300">
    <nav className="flex flex-col gap-3">
      <SidebarItem icon={<FiHome size={20} />} text="Overview" to="/" />
      <SidebarItem icon={<FiUser size={20} />} text="Species Explorer" to="/dashboard/Species-Explorer" />
      <SidebarItem icon={<FiZap size={20} />} text="Stic Filter" to="/dashboard/Stic-Filter" />
      <SidebarItem icon={<FiGitBranch size={20} />} text="Knowledge Graph" to="/dashboard/Knowledge-Graph" />
      <SidebarItem icon={<FiBookOpen size={20} />} text="Insights & Summaries" to="/dashboard/Insights-Summaries" />
      <SidebarItem icon={<FiTarget size={20} />} text="Mission Relevance" to="/dashboard/Mission-Relevance" />
    </nav>
  </aside>
);

export default HomeSidebar;
