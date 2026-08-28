import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React, { lazy } from 'react';
const ChatBot = lazy(() => import('./components/ChatBot'));
import { useOutlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import "./App.scss";

const App = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
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
      </div>
      <React.Suspense fallback={null}>
        <ChatBot />
      </React.Suspense>
    </div>
  );
};

export default App;
