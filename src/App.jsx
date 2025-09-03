import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { MainLayout } from "./components/mainLayout/MainLayout";
import { motionVariants } from "./utils/animationVariants"; // assuming this exists

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <motion.div
                variants={motionVariants.fade}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/About"
            element={
              <motion.div
                variants={motionVariants.fade}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <About />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
