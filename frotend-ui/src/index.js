import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App component acts as the main container and layout
    children: [
      {
        path: "/",
        element: <Home />, // Renders Home when path is exactly "/"
      },
      {
        // Dynamic route for the dashboard topic, e.g., /dashboard/human-health-in-space
        path: "dashboard/:topic",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
);
