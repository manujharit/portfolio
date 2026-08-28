import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router";

import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Portfolio from "./components/Portfolio.jsx";
import "../index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <About />
    },
    {
      path: '/resume',
      element: <Resume />
    },
    {
      path: '/portfolio',
      element: <Portfolio />
    }
  ]
}]);

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
