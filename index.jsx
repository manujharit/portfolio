import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router";

const About = lazy(()=> import("./src/components/About.jsx"));
const Resume = lazy(()=>import("./src/components/Resume.jsx"));
const Portfolio = lazy(()=> import("./src/components/Portfolio.jsx"));
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AnimatedOutlet = () => {
  const location = useLocation();
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {React.cloneElement(<App />, { key: location.pathname })}
    </React.Suspense>
  );
};

const AppRouter = createBrowserRouter([{
  path: '/',
  element: <AnimatedOutlet />,
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
