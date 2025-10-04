// src/pages/Home.jsx
import React from 'react';
import { FiBook, FiCalendar, FiUser, FiZap, FiGithub, FiArrowRight } from 'react-icons/fi'; // Updated icons for better visual appeal
import { IoLeafOutline } from 'react-icons/io5';
import { FaMicroscope, FaRadiation, FaDna, FaSatelliteDish } from 'react-icons/fa';

// --- Small Reusable Components for Home Page ---

const MetricCard = ({ icon, title, value }) => (
  <div className="bg-space-light/50 p-5 rounded-lg flex flex-col items-start justify-center text-left h-32 border border-space-border shadow-md hover:shadow-xl transition-all duration-300">
    <div className="text-accent-teal mb-2">{icon}</div>
    <p className="text-text-muted text-sm">{title}</p>
    <p className="text-text-light font-semibold text-xl leading-tight mt-1">{value}</p>
  </div>
);

const KnowledgeGraphNode = ({ label, active = false, delay = 0 }) => (
  <div
    className={`flex items-center justify-center w-20 h-20 rounded-full border-2 ${active ? 'border-accent-teal bg-accent-teal/20' : 'border-space-border bg-space-light/30'}
                text-text-light text-xs text-center p-2 leading-tight font-mono transition-all duration-500 hover:scale-105 cursor-pointer transform`}
    style={{ animationDelay: `${delay}s` }} // For potential animation
  >
    {label}
  </div>
);

const TimelineCard = ({ icon, title, description, badgeText, active, onClick }) => (
  <div
    className={`bg-space-light/50 p-6 rounded-xl border-2 cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1
                ${active ? 'border-accent-teal shadow-lg scale-[1.01]' : 'border-space-border hover:border-accent-teal/50'}`}
    onClick={onClick}
  >
    <div className="flex-grow mb-4">
      {React.cloneElement(icon, { size: 36, className: 'text-accent-teal mb-3' })} {/* Pass size/color to icon */}
      <h3 className="text-text-light font-bold mt-2 mb-1 text-lg">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
    {badgeText && (
      <span className="inline-block bg-accent-blue-dark/30 text-accent-blue-light text-xs font-medium px-3 py-1 rounded-full mt-3 self-start shadow-inner">
        {badgeText}
      </span>
    )}
  </div>
);


// --- Home Page Component ---

const Home = ({ onNavigateToDashboard }) => {
  return (
    <div className="flex-1 p-8"> {/* Adjusted padding */}
      {/* Hero Welcome Section */}
      <div className="relative bg-gradient-to-br from-space-card to-space-light p-10 rounded-2xl shadow-2xl mb-12 border border-space-border overflow-hidden">
        {/* Abstract background elements for visual interest */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent-teal/10 rounded-full -mt-12 -mr-12 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-blue-light/10 rounded-full -mb-8 -ml-8 animate-pulse-slow delay-500"></div>

        <h2 className="text-5xl font-extrabold text-text-light mb-4 leading-tight relative z-10">
          Explore the Frontiers of <br /><span className="text-accent-teal">Space Bioscience</span>
        </h2>
        <p className="text-text-muted text-xl mb-6 max-w-2xl relative z-10">
          Your gateway to decades of NASA research, data, and actionable insights on human health, biology, and life beyond Earth.
        </p>
        <button
          onClick={() => onNavigateToDashboard("Overview")}
          className="bg-accent-teal text-space-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-accent-blue-light transition-all duration-300 transform hover:scale-105 shadow-lg relative z-10"
        >
          Explore Insights <FiArrowRight className="inline-block ml-2" />
        </button>
      </div>

      {/* Key Metrics Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-text-light mb-6">Key Metrics</h3>
        <div className="grid grid-cols-6 gap-6">
          <MetricCard
            icon={<FiBook size={28} />}
            title="Total Publications"
            value="608+"
          />
          <MetricCard
            icon={<FiCalendar size={28} />}
            title="Years Covered"
            value="1980 - 2024"
          />
          <MetricCard
            icon={<IoLeafOutline size={28} />}
            title="Species Studied"
            value="210 Organisms"
          />
          <MetricCard
            icon={<FaDna size={28} />}
            title="Biological Systems"
            value="150+ Areas"
          />
          <MetricCard
            icon={<FiUser size={28} />}
            title="Human Subject Studies"
            value="310 Projects"
          />
          <MetricCard
            icon={<FiUser size={28} />}
            title="Human Subject Studies"
            value="310 Projects"
          />
          
          
        </div>
      </div>

      {/* Interactive Research Timeline (Clickable Cards) */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-text-light mb-6">Explore Research Areas</h3>
        <div className="grid grid-cols-3 gap-6"> {/* Increased gap for more breathing room */}
          <TimelineCard
            icon={<FiUser />}
            title="Human Health in Space"
            description="Deep dive into physiological changes, countermeasures, and long-term effects on astronauts."
            onClick={() => onNavigateToDashboard("Human Health in Space")}
          />
          <TimelineCard
            icon={<FaMicroscope />}
            title="Microbes & Bioregenerative Systems"
            description="Understand microbial impacts, life support systems, and closed ecological environments."
            onClick={() => onNavigateToDashboard("Microbes & Bioregenerative Systems")}
          />
          <TimelineCard
            icon={<IoLeafOutline />}
            title="Plant Biology & Crop Production"
            description="Insights into plant growth in microgravity, regolith, and sustainable food systems."
            badgeText="Key Research Focus"
            active
            onClick={() => onNavigateToDashboard("Plant Biology & Crop Production")}
          />
          <TimelineCard
            icon={<FaRadiation />}
            title="Radiation Effects & Shielding"
            description="Research on cosmic radiation, its biological impacts, and advanced shielding strategies."
            onClick={() => onNavigateToDashboard("Radiation Effects & Shielding")}
          />
          <TimelineCard
            icon={<FaSatelliteDish />}
            title="Mission Relevance: Moon & Mars"
            description="Connecting bioscience findings directly to lunar and Martian exploration missions."
            onClick={() => onNavigateToDashboard("Mission Relevance: Moon & Mars")}
          />
          <TimelineCard
            icon={<FiGithub />} // Using Github icon as a placeholder for a "Contributing" or "Data Access" card
            title="Data & Open Science Initiatives"
            description="Access raw data, contribute to ongoing research, and explore collaborative projects."
            onClick={() => onNavigateToDashboard("Data & Open Science Initiatives")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;