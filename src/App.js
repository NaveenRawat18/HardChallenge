import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have a CSS file for styling
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './components/Dashboard';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      // element: <Dashboard />
    },
  ]);
  return(
    <RouterProvider router={router} />
  );
}

export default App;
