import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Dashboard from './pages/Dashboard.jsx';
import KnowledgeGraph from './pages/KnowledgeGraph';
import PublicationExplorer from './pages/PublicationExplorer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> }, // Dashboard at root
      { path: "dashboard/:topic", element: <Dashboard /> }, // Dashboard with topic
      { path: "PublicationExplorer", element: <PublicationExplorer /> },
      { path: "KnowledgeGraph", element: <KnowledgeGraph /> },
      { path: "AIInsights", element: <Dashboard /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);