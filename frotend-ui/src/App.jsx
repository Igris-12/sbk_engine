import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomeSidebar from "./components/HomeSidebar";

function App() {
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const location = useLocation(); // Gets the current URL info

  // --- THIS IS THE KEY LOGIC ---
  // List all the pages where you DON'T want the sidebar.
  const noSidebarPaths = ['/', '/login', '/signup'];
  
  // This will be 'true' for pages like Dashboard, and 'false' for Home, Login, etc.
  const showSidebar = !noSidebarPaths.includes(location.pathname);

  const handleSearch = (term) => {
    setGlobalSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-space-dark text-text-light font-sans antialiased">
      <Header onSearch={handleSearch} />
      
      <div className="flex h-screen overflow-hidden pt-16">
        {/* The sidebar is now rendered ONLY if showSidebar is true */}
        {showSidebar && (
          <div className="w-64 flex-shrink-0 h-full overflow-y-auto">
            <HomeSidebar />
          </div>
        )}
        
        {/* The <Outlet> renders the correct page component (Home, Dashboard, etc.) */}
        <main className="flex-1 overflow-y-auto p-6">
           <Outlet context={{ searchTerm: globalSearchTerm }} />
        </main>
      </div>
    </div>
  );
}

export default App;
