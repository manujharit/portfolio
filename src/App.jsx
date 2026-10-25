import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React, { lazy, Suspense, useEffect } from 'react';
const ChatBot = lazy(() => import('./components/ChatBot'));
import { useOutlet, useLocation } from "react-router";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import "./App.scss";

const PageLoader = () => (
  <div className="page-loader" aria-label="Loading page content">
    <div className="page-loader__spinner"></div>
  </div>
);

const App = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="page-content"
            >
              <Suspense fallback={<PageLoader />}>
                {currentOutlet}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      </div>
    </MotionConfig>
  );
};

export default App;
