import { useContext, FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./navbar.module.css"; // unified CSS module
import { ThemeContext } from "../../contexts/themeContext.jsx";
import { SwitchToggle } from "../switchToggle/SwitchToggle.component";
import { NavbarProps } from "./navbar.types";

export const Navbar: FC<NavbarProps> = ({
  showThemeButton = false,
  links = [],
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const isActive = (to: string) => location.pathname === to;

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const onScroll = () => setScrolled(window.scrollY > 10);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={clsx(styles.navbar, {
        [styles.mobile]: isMobile,
        [styles.scrolled]: scrolled,
      })}
    >
      {isMobile && (
        <button
          className={clsx(styles.hamburger, { [styles.open]: menuOpen })}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      <nav
        className={clsx(styles.navLinks, {
          [styles.open]: menuOpen,
        })}
      >
        {links.map(({ path, label }) => (
          <Link
            key={path}
            className={clsx(styles.link, {
              [styles.linkActive]: isActive(path),
            })}
            to={path}
            onClick={() => setMenuOpen(false)}
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
            classNameLabel={styles.linkText}
            styleConfig={{
              backgroundCheckedColor: "var(--switchtoggle-bg)",
            }}
          />
        )}
      </nav>
    </div>
  );
};
