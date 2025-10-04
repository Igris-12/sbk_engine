import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient"; // 👈 Ensure this file exists
import { FiBook, FiCalendar, FiUser, FiGithub, FiArrowRight } from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";
import { FaMicroscope, FaRadiation, FaSatelliteDish } from "react-icons/fa";

// --- Small Reusable Components ---
const MetricCard = ({ icon, title, value }) => (
  <div className="bg-slate-800/50 p-5 rounded-lg flex flex-col items-start justify-center text-left h-32 border border-slate-700 shadow-md hover:shadow-xl transition-all duration-300">
    <div className="text-teal-400 mb-2">{icon}</div>
    <p className="text-slate-400 text-sm">{title}</p>
    <p className="text-slate-100 font-semibold text-xl leading-tight mt-1">{value}</p>
  </div>
);

const TimelineCard = ({ icon, title, description, badgeText, active, linkTo }) => (
  <Link
    to={linkTo}
    className={`bg-slate-800/50 p-6 rounded-xl border-2 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1
                ${active ? "border-teal-400 shadow-lg scale-[1.01]" : "border-slate-700 hover:border-teal-400/50"}`}
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

// --- Static Metrics Section (unchanged) ---
const RESEARCH_AREAS = [
  {
    title: "Human Health in Space",
    description:
      "Explore physiological changes, countermeasures, and long-term effects on astronauts.",
    icon: <FiUser />,
  },
  {
    title: "Microbes & Bioregenerative Systems",
    description: "Understand microbial impacts, life support systems, and closed ecosystems.",
    icon: <FaMicroscope />,
  },
  {
    title: "Plant Biology & Crop Production",
    description: "Insights into plant growth in microgravity and sustainable food systems.",
    icon: <IoLeafOutline />,
    badgeText: "Key Research Focus",
    active: true,
  },
  {
    title: "Radiation Effects & Shielding",
    description: "Research cosmic radiation, biological impacts, and shielding strategies.",
    icon: <FaRadiation />,
  },
  {
    title: "Mission Relevance: Moon & Mars",
    description: "Connecting bioscience findings to lunar and Martian exploration missions.",
    icon: <FaSatelliteDish />,
  },
  {
    title: "Data & Open Science Initiatives",
    description: "Access raw data, contribute, and explore open collaborative projects.",
    icon: <FiGithub />,
  },
];

// --- HOME PAGE COMPONENT ---
const Home = () => {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  // Fetch topics from Supabase dynamically
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 px-10 py-10">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 p-10 rounded-2xl shadow-2xl mb-12 border border-slate-700 overflow-hidden">
        <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight relative z-10">
          Explore the Frontiers of <br />
          <span className="text-teal-400">Space Bioscience</span>
        </h2>
        <p className="text-slate-400 text-lg mb-6 max-w-2xl relative z-10">
          Your gateway to NASA’s bioscience research — human health, biology, and life beyond
          Earth.
        </p>

        <Link
          to="/dashboard/overview"
          className="inline-flex items-center bg-teal-400 text-slate-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-300 transition-all duration-300 transform hover:scale-105 shadow-lg relative z-10"
        >
          Explore Insights <FiArrowRight className="ml-2" />
        </Link>
      </div>

      {/* Key Metrics Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-6">Key Metrics</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {RESEARCH_AREAS.slice(0, 6).map((area, index) => (
            <MetricCard
              key={index}
              icon={area.icon}
              title={area.title.split(" ")[0]}
              value={index % 2 === 0 ? "608+" : "310 Projects"}
            />
          ))}
        </div>
      </div>

      {/* 🚀 Dynamic Research Areas from Supabase */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-6">Explore Research Areas</h3>

        {topics.length === 0 ? (
          <p className="text-slate-400 text-lg">Loading topics from Supabase...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <TimelineCard
                key={topic.id}
                icon={<FiBook />} // or you can map icon names dynamically if stored
                title={topic.title}
                description={topic.description}
                badgeText={topic.color ? "Featured" : null}
                active={false}
                linkTo={`/dashboard/${createSlug(topic.title)}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
