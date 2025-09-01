import { useContext, FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navTransparent.css";
import { ThemeContext } from "../../contexts/themeContext";
import { usePageAnimation } from "../../contexts/PageAnimationContext";
import { SwitchToggle } from "../switchToggle/SwitchToggle";

export interface NavLink {
  path: string;
  label: string;
}

interface NavbarProps {
  showThemeButton?: boolean;
  links?: NavLink[];
}

export const Navbar: FC<NavbarProps> = ({ showThemeButton = false, links }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div className={`navbar`}>
      <div className="navbar__links">
        {links?.map(({ path, label }) => (
          <Link
            key={path}
            className={`navbar__link ${
              location.pathname === path ? "navbar__active" : ""
            }`}
            to={path}
          >
            {label}
          </Link>
        ))}
      </div>

      {showThemeButton ? (
        <SwitchToggle
          defaultChecked={theme}
          onToggle={() => toggleTheme()}
          styleConfig={{
            backgroundColor: "var(--switchtoggle-color)",
            backgroundCheckedColor: "var(--st-check-color)",
            backgroundBeforeColor: "var(--st-nobe-color)",
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
