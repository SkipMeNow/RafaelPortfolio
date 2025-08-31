// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
// import { Footer } from "../components/footer/Footer"; // optional
import "./mainLayout.css";

export function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
