import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ThemeContext } from "../../contexts/themeContext";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/" className="navbar__link">
          My<span className="navbar__link-span">Portfolio</span>
        </Link>
      </div>

      <div className="navbar__links"></div>

      <div className="navbar__actions">
        <button onClick={toggleTheme}>
          Switch to {theme === "dark" ? "light" : "dark"} mode
        </button>
      </div>
    </div>
  );
};
