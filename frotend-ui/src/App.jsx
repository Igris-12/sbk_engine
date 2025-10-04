import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom"; // Essential hooks/components
import Header from "./components/Header";
import HomeSidebar from "./components/HomeSidebar";
import Home from "./pages/Home";

// --- Helper Component: AppContent (Renders dynamic content based on route) ---
const AppContent = ({ globalSearchTerm }) => {
    const location = useLocation();
    
    // Check if we're on the home page
    const isHomePage = location.pathname === '/';

    return (
        <main className="flex gap-6 p-6 pt-24 min-h-screen">
            {/* Show sidebar on all pages except home */}
            {!isHomePage && <HomeSidebar />}
            
            {/* Main Content Area */}
            <div className={`flex-1 ${isHomePage ? 'bg-space-card/70 border border-space-border rounded-xl backdrop-blur-md shadow-lg p-0' : 'p-0'}`}>
                {isHomePage ? (
                    <div className="p-8 h-full"> 
                        <Home searchTerm={globalSearchTerm} /> 
                    </div>
                ) : (
                    <div className="bg-space-card/70 border border-space-border rounded-xl backdrop-blur-md shadow-lg p-8 h-full">
                         <Outlet context={{ searchTerm: globalSearchTerm }} /> 
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
