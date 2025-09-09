import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { MainLayout } from "./components/mainLayout/MainLayout";
import { AnimatedPage } from "./components/AnimatedPage";

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="/about"
            element={
              <AnimatedPage>
                <About />
              </AnimatedPage>
            }
          />
          <Route
            path="/experience"
            element={
              <AnimatedPage>
                <Experience />
              </AnimatedPage>
            }
          />
          <Route
            path="*"
            element={
              <AnimatedPage>
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  404: Page not found
                </div>
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
