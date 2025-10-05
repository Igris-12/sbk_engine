import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomeSidebar from "./components/HomeSidebar";
import Home from "./pages/Home";

const AppContent = ({ globalSearchTerm }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="flex h-screen overflow-hidden pt-16">
            {/* Fixed Sidebar - only show when not on home page */}
            {!isHomePage && (
                <div className="w-64 flex-shrink-0 h-full overflow-y-auto">
                    <HomeSidebar />
                </div>
            )}
            
            {/* Scrollable Content Area */}
            <main className="flex-1 overflow-y-auto p-6">
                {isHomePage ? (
                    <Home searchTerm={globalSearchTerm} />
                ) : (
                    <div className="bg-space-card/70 border border-space-border rounded-xl backdrop-blur-md shadow-lg p-8">
                        <Outlet context={{ searchTerm: globalSearchTerm }} />
                    </div>
                )}
            </main>
        </div>
    );
};

function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");

  const handleSearch = (term) => {
    setGlobalSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-space-dark text-text-light font-sans antialiased">
      <Header onSearch={handleSearch} /> 
      <AppContent globalSearchTerm={globalSearchTerm} />
    </div>
  );
}

export default App;