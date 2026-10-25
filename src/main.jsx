import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

const About = lazy(() => import("./components/About.jsx"));
const Resume = lazy(() => import("./components/Resume.jsx"));
const Portfolio = lazy(() => import("./components/Portfolio.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
import "../index.scss";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

const ErrorFallback = () => (
  <div className="error-fallback">
    <h2>Something went wrong</h2>
    <p>Please refresh the page or return to the main portfolio.</p>
    <a href="/" className="error-fallback__link">
      Return to Home
    </a>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorFallback />,
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
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={AppRouter} />
    </I18nextProvider>
  </React.StrictMode>
);
