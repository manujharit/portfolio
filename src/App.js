import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col text-slate-400 h-screen">
      <div className="md:mx-16 lg:mx-[10%] xl:mx-[25%]">
        <Navbar />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mx-2 md:mx-16 lg:mx-[10%] xl:mx-[25%]"
        >
          <Outlet />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
