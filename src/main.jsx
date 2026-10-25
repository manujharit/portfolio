import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

const About = lazy(() => import("./components/About.jsx"));
const Resume = lazy(() => import("./components/Resume.jsx"));
const Portfolio = lazy(() => import("./components/Portfolio.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
import "../index.scss";
import "./i18n";

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
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <Navigate to="/" replace />
    }
  ]
}]);

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
