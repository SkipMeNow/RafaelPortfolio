import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar.component";
import "./mainLayout.css";
import { NoiseBackground } from "../effacts/backgrounds/NoiseBackground";
import { navLinks } from "../../config/routes.config";
import "@fontsource/roboto";

export function MainLayout() {
  return (
    <div className="main-layout">
      <NoiseBackground opacity={0.1} blendMode="normal" baseFrequency={0.9} />
      <Navbar showThemeButton={true} links={navLinks} />
      <main className="main-layout__content">
        <Outlet />
      </main>
      {/* Optional: <Footer /> */}
    </div>
  );
}
