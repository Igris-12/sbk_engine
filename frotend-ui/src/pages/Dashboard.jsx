import React from "react";
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';
import Sidebar from '../components/Sidebar';
import PublicationsExplorer from '../components/PublicationsExplorer';

function Dashboard() {
  return (
    // Use your custom background color for the main div if you're not using a background image
    // If you want the image, then remove 'bg-nasa-blue' and uncomment the image in index.css
    <div className="min-h-screen bg-nasa-blue text-nasa-light-gray">
      <Header />
      <FilterBar />
      <main className="flex gap-6 p-6"> {/* Adjusted gap and padding */}
        <Sidebar />
        <PublicationsExplorer />
      </main>
    </div>
  );
}

export default Dashboard;

