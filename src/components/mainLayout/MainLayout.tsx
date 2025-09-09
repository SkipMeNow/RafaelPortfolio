// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import { Navbar, NavLink } from "../navbar/Navbar";
// import { Footer } from "../components/footer/Footer"; // optional
import "./mainLayout.css";
import { NoiseBackground } from "../effacts/backgrounds/NoiseBackground";
import "@fontsource/roboto"; // Defaults to weight 400

export function MainLayout() {
  const defaultLinks: NavLink[] = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/Projects", label: "Projects" },
    { path: "/Contact", label: "Contact" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <div className="main-layout">
      <NoiseBackground opacity={0.1} blendMode="normal" baseFrequency={0.9} />
      <Navbar showThemeButton={true} links={defaultLinks} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
