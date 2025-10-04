import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Essential hooks/components
import Header from "./components/Header";
import HomeSidebar from "./components/HomeSidebar";
import Home from "./pages/Home";

// --- Helper Component: AppContent (Renders dynamic content based on route) ---
const AppContent = ({ globalSearchTerm }) => {
    const location = useLocation();
    
    // Check if the current route is a dashboard route
    const isDashboardRoute = location.pathname.startsWith("/dashboard");

    return (
        <main className="flex gap-6 p-6 pt-24 min-h-screen">
            {/* Conditionally render the sidebar only for dashboard pages */}
            {isDashboardRoute && <HomeSidebar />}
            
            {/* Main Content Area */}
            {/* The outer div provides the necessary padding and styling */}
            <div className={`flex-1 ${!isDashboardRoute ? 'bg-space-card/70 border border-space-border rounded-xl backdrop-blur-md shadow-lg p-0' : 'p-0'}`}>
                
                {location.pathname === '/' ? (
                    // When on the home path ("/"), render Home directly to pass the searchTerm prop
                    <div className="p-8 h-full"> 
                        <Home searchTerm={globalSearchTerm} /> 
                    </div>
                ) : (
                    // When on any other path (like /dashboard/:topic), render the Outlet which contains the Dashboard
                    <div className="bg-space-card/70 border border-space-border rounded-xl backdrop-blur-md shadow-lg p-8 h-full">
                         <Outlet /> 
                    </div>
                )}
            </div>
        </main>
    );
};
// --- End AppContent ---


function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");

  const handleSearch = (term) => {
    setGlobalSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-space-dark text-text-light font-sans antialiased overflow-hidden">
      <Header onSearch={handleSearch} /> 
      
      {/* AppContent manages rendering Home (with search prop) or Outlet (Dashboard) */}
      <AppContent globalSearchTerm={globalSearchTerm} />

    </div>
  );
}

export default App;
