// App.tsx
import { PageAnimationProvider } from "./contexts/PageAnimationContext";

function App() {
  return (
    <PageAnimationProvider>
      <AnimatedRoutes />
    </PageAnimationProvider>
  );
}

export default App;

// AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { usePageAnimation } from "./contexts/PageAnimationContext";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { MainLayout } from "./components/mainLayout/MainLayout";

export const AnimatedRoutes = () => {
  const location = useLocation();
  const { onExit } = usePageAnimation();

  return (
    <AnimatePresence mode="wait" onExitComplete={onExit}>
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
