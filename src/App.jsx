import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React, { lazy, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
const ChatBot = lazy(() => import('./components/ChatBot'));
import { useOutlet, useLocation } from "react-router";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import "./App.scss";

const App = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        <CustomCursor />
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
            {currentOutlet}
          </motion.div>
        </AnimatePresence>
        </main>
        <React.Suspense fallback={null}>
          <ChatBot />
        </React.Suspense>
      </div>
    </MotionConfig>
  );
};

export default App;
