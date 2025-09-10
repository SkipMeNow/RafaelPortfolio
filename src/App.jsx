import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, Suspense } from "react";
import { MainLayout } from "./components/mainLayout/MainLayout";
import { AnimatedPage } from "./components/AnimatedPage";
import { appRoutes } from "./config/routes.config";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            {appRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<AnimatedPage>{element}</AnimatedPage>}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;
