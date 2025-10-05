import React from "react";
import { useParams } from "react-router-dom"; 

const AllInsights = () => {
  const { topic } = useParams();
  const readableTopic = topic ? 
      topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
      "AI Insights";

  return (
    <div className="p-6 h-full flex flex-col bg-slate-950 text-slate-100">
      <h2 className="text-3xl font-bold text-slate-100 mb-4 border-b border-teal-400 pb-2">
        AI Insights for: {readableTopic}
      </h2>
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 shadow-2xl">
        <p className="text-slate-300">
          This section provides AI-generated insights, analysis, and reports for
          the topic **{readableTopic}**.
        </p>
      </div>
    </div>
  );
};

export default AllInsights;