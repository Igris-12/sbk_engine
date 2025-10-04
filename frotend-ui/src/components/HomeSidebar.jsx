import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiSearch, FiGitBranch, FiZap } from 'react-icons/fi';

const SidebarItem = ({ icon, text, to }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-5 py-3 rounded-lg transition-colors text-base text-slate-100 hover:bg-slate-800/50 hover:text-teal-400"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const HomeSidebar = () => (
  <aside className="w-64 flex-shrink-0 bg-slate-950 border border-slate-700 rounded-xl p-5 shadow-2xl h-full transition-all duration-300">
    <nav className="flex flex-col gap-3">
      <SidebarItem icon={<FiHome size={20} />} text="Dashboard" to="/" />
      <SidebarItem icon={<FiSearch size={20} />} text="Publication Explorer" to="/PublicationExplorer" />
      <SidebarItem icon={<FiGitBranch size={20} />} text="Knowledge Graph" to="/KnowledgeGraph" />
      <SidebarItem icon={<FiZap size={20} />} text="AI Insights" to="/AIInsights" />
    </nav>
  </aside>
);

export default HomeSidebar;