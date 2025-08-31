import { Routes, Route } from "react-router";
import Home from "./pages/home/Home.tsx";
import { MainLayout } from "./components/mainLayout/MainLayout.tsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
