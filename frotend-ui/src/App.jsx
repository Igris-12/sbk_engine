// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import HomeSidebar from "./components/HomeSidebar"; // You might want to rename this to just "Sidebar"
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [dashboardTopic, setDashboardTopic] = useState("");

  const handleNavigateToDashboard = (topic) => {
    setDashboardTopic(topic);
    setCurrentPage("dashboard");
  };

  return (
    <div className="min-h-screen bg-space-dark text-text-light font-sans antialiased overflow-hidden">
      <Header />
      <main className="flex gap-6 p-6 pt-24 min-h-screen">
        {/* ✨ CHANGE: Conditionally render the sidebar ONLY when on the dashboard page */}
        {currentPage === "dashboard" && <HomeSidebar />}
        
        {/* Main Content Area */}
        {/* The styling logic here is already correct */}
        <div className={`flex-1 ${currentPage === "home" ? 'bg-space-card/70 border border-space-border rounded-xl backdrop-blur-md shadow-lg p-0' : 'p-0'}`}>
          {currentPage === "home" ? (
            // Home page content
            <Home onNavigateToDashboard={handleNavigateToDashboard} />
          ) : (
            // Dashboard page wrapper
            <div className="bg-space-card/70 border border-space-border rounded-xl backdrop-blur-md shadow-lg p-8 h-full">
              <Dashboard topic={dashboardTopic} onGoBack={() => setCurrentPage("home")} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;