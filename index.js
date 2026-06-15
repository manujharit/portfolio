import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.js";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router";
const WorkExperience = lazy(()=>import("./src/components/WorkExperience.js"));
const Home = lazy(()=>import("./src/components/Home.js"));
const About = lazy(()=> import("./src/components/About.js"));
const Tech = lazy(()=> import("./src/components/Tech.js"));
const Work = lazy(()=> import("./src/components/Work.js"));
import PageShimmer from "./src/components/shimmer/PageShimmer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AnimatedOutlet = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<PageShimmer/>}>
      {React.cloneElement(<App />, { key: location.pathname })}
    </Suspense>
  );
};

const AppRouter = createBrowserRouter([{
  path: '/',
  element: <AnimatedOutlet />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/timeline',
      element: <WorkExperience />
    },
    {
      path: '/work',
      element: <Work />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/tech',
      element: <Tech />
    }
  ]
}]);

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
