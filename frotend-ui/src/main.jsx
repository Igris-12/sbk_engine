import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Component and Page Imports
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import KnowledgeGraph from './pages/KnowledgeGraph';
import PublicationExplorer from './pages/PublicationExplorer';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import { FlashProvider } from './contexts/FlashContext'; // 1. IMPORT THE PROVIDER

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App provides the layout for ALL pages
    children: [
      {
        index: true, // This makes Home the default page for "/"
        element: <Home />,
      },
      { path: "dashboard/:topic", element: <Dashboard /> },
      { path: "PublicationExplorer", element: <PublicationExplorer /> },
      { path: "KnowledgeGraph", element: <KnowledgeGraph /> },
      { path: "AIInsights", element: <Dashboard /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap the RouterProvider with the FlashProvider */}
    <FlashProvider>
      <RouterProvider router={router} />
    </FlashProvider>
  </StrictMode>
);

