// src/pages/Dashboard.jsx
import React from 'react';

const Dashboard = ({ topic, onGoBack }) => {
  return (
    <div className="p-4 h-full flex flex-col">
      <h2 className="text-4xl font-bold text-text-light mb-4 border-b-2 border-accent-teal pb-2">Dashboard: {topic}</h2>
      <p className="text-text-muted text-lg mb-8">
        This is where the detailed insights, summaries, graphs, and relevant publications for "{topic}" will be displayed.
      </p>
      {/* Example content for dashboard */}
      <div className="grid grid-cols-2 gap-6 flex-grow">
        <div className="bg-space-light/50 p-6 rounded-lg border border-space-border shadow-md">
          <h3 className="text-xl font-semibold text-text-light mb-3">Summary for {topic}</h3>
          <p className="text-text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="bg-space-light/50 p-6 rounded-lg border border-space-border shadow-md">
          <h3 className="text-xl font-semibold text-text-light mb-3">Key Data Points</h3>
          <ul className="list-disc list-inside text-text-muted">
            <li>Metric A: 1234 units</li>
            <li>Metric B: 56.7% change</li>
            <li>Status: Ongoing research</li>
          </ul>
        </div>
      </div>

      <button
        onClick={onGoBack}
        className="mt-8 bg-accent-blue-dark text-text-light font-bold py-3 px-6 rounded-full hover:bg-accent-blue-dark/80 transition-colors self-start shadow-md"
      >
        &larr; Back to Home Overview
      </button>
    </div>
  );
};

export default Dashboard;