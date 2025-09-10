import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Experience from "../pages/experience/Experience";
import { NavLink } from "../components/navbar/navbar.types";

export const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
  { path: "/experience", label: "Experience" },
];

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/experience", element: <Experience /> },
  {
    path: "*",
    element: (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        404: Page not found
      </div>
    ),
  },
];