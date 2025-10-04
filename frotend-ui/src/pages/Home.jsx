import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { FiBook, FiArrowRight, FiSearch, FiSliders } from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";
import { FaMicroscope, FaRadiation, FaSatelliteDish, FaDna } from "react-icons/fa";

// --- Metric Card ---
const MetricCard = ({ icon, title, value }) => (
  <div className="bg-slate-800/50 p-5 rounded-lg flex flex-col items-start justify-center text-left h-32 border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300">
    <div className="text-teal-400 mb-2">{icon}</div>
    <p className="text-slate-400 text-sm">{title}</p>
    <p className="text-slate-100 font-semibold text-xl leading-tight mt-1">{value}</p>
  </div>
);

// --- Timeline Card ---
const TimelineCard = ({ icon, title, description, badgeText, linkTo }) => (
  <Link
    to={linkTo}
    className={`bg-slate-800/50 p-6 rounded-xl border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-slate-700 hover:border-teal-400/50`}
  >
    <div className="flex-grow mb-4">
      {React.cloneElement(icon, { size: 36, className: "text-teal-400 mb-3" })}
      <h3 className="text-slate-100 font-bold mt-2 mb-1 text-lg">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
    {badgeText && (
      <span className="inline-block bg-teal-900/30 text-teal-300 text-xs font-medium px-3 py-1 rounded-full mt-3 self-start shadow-inner">
        {badgeText}
      </span>
    )}
  </Link>
);

const ICONS = [FiBook, FaMicroscope, IoLeafOutline, FaRadiation, FaSatelliteDish, FaDna];

// --- Home Page ---
const Home = () => {
  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // --- Fetch topics dynamically from Supabase ---
  useEffect(() => {
    const fetchTopics = async () => {
      const { data, error } = await supabase.from("topics").select("*");
      if (error) console.error("Error fetching topics:", error);
      else setTopics(data);
    };
    fetchTopics();
  }, []);

  const createSlug = (title) =>
    title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-").replace(/:/g, "");

  // --- Filter topics dynamically ---
  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 px-10 py-24">
      {/* Hero Section */}
      <div className="relative bg-slate-800/50 p-10 rounded-2xl shadow-2xl mb-12 border border-slate-700">
        <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">
          Explore the Frontiers of <br />
          <span className="text-teal-400">Space Bioscience</span>
        </h2>
        <p className="text-slate-400 text-lg mb-6 max-w-2xl">
          Your gateway to NASA’s bioscience research — human health, biology, and life beyond Earth.
        </p>
        <Link
          to="/dashboard/overview"
          className="inline-flex items-center bg-teal-400 text-slate-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Insights <FiArrowRight className="ml-2" />
        </Link>
      </div>

      {/* Search Bar with Icons */}
      <div className="mb-8 relative w-full max-w-2xl">
        <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search research areas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-3 pl-12 pr-12 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
        />
        <FiSliders className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-teal-400" />
      </div>

      {/* Research Areas */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-6">
          {searchTerm ? `Results for "${searchTerm}" (${filteredTopics.length})` : "Explore Research Areas"}
        </h3>

        {filteredTopics.length === 0 && searchTerm && (
          <p className="text-slate-400 text-lg mb-4">
            No research areas match your search term: <strong>"{searchTerm}"</strong>
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic, idx) => {
            const IconComponent = ICONS[idx % ICONS.length]; // Rotate icons if more topics than icons
            return (
              <TimelineCard
                key={topic.id}
                icon={<IconComponent />}
                title={topic.title}
                description={topic.description}
                badgeText={topic.color ? "Featured" : null}
                linkTo={`/dashboard/${createSlug(topic.title)}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
