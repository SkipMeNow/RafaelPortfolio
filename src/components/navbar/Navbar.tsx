import { useContext, FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./navTransparent.module.css";
import mobileStyles from "./navMobile.module.css";
import { ThemeContext } from "../../contexts/themeContext";
import { SwitchToggle } from "../switchToggle/SwitchToggle";

export interface NavLink {
  path: string;
  label: string;
}

interface NavbarProps {
  showThemeButton?: boolean;
  links?: NavLink[];
}

export const Navbar: FC<NavbarProps> = ({
  showThemeButton = false,
  links = [],
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const isActive = (to: string) => location.pathname === to;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setMenuOpen(false); // close menu on desktop
    };
    window.addEventListener("resize", handleResize);
    //for testing
    setIsMobile(true);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //for testing
  const activeStyles = mobileStyles;
  // const activeStyles = isMobile ? mobileStyles : styles;

  return (
    <div className={activeStyles.navbar}>
      {isMobile && (
        <label className={activeStyles.hamburger}>
          <input
            type="checkbox"
            onChange={() => setMenuOpen((prev) => !prev)}
          />
          <span />
          <span />
          <span />
        </label>

        // <button
        //   className={`${activeStyles.hamburger} ${
        //     menuOpen ? activeStyles.open : ""
        //   }`}
        //   onClick={() => setMenuOpen((prev) => !prev)}
        //   aria-label="Toggle menu"
        // >
        //   <span />
        //   <span />
        //   <span />
        // </button>
      )}

      <nav
        className={clsx(activeStyles.navLinks, {
          [activeStyles.open]: menuOpen,
        })}
      >
        {links.map(({ path, label }) => (
          <Link
            key={path}
            className={clsx("link", { link__active: isActive(path) })}
            to={path}
            onClick={() => setMenuOpen(false)} // close menu after click
          >
            {label}
          </Link>
        ))}

        {showThemeButton && (
          <SwitchToggle
            defaultChecked={theme === "dark"}
            onToggle={(checked) => {
              const shouldToggle =
                (checked && theme !== "dark") ||
                (!checked && theme !== "light");
              if (shouldToggle) toggleTheme();
            }}
            label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            classNameLabel="link__text"
            styleConfig={{
              backgroundCheckedColor: "var(--switchtoggle-bg)",
            }}
          />
        )}
      </nav>
    </div>
  );
};
