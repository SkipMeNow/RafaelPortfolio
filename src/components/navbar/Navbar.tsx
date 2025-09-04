import { useContext, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navTransparent.css";
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

export const Navbar: FC<NavbarProps> = ({ showThemeButton = false, links }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  return (
    <div className={`navbar`}>
      {links?.map(({ path, label }) => (
        <Link
          key={path}
          className={`link ${location.pathname === path ? "link__active" : ""}`}
          to={path}
        >
          {label}
        </Link>
      ))}

      {showThemeButton ? (
        <SwitchToggle
          defaultChecked={theme === "dark"}
          onToggle={(checked) => {
            if (
              (checked && theme !== "dark") ||
              (!checked && theme !== "light")
            ) {
              toggleTheme();
            }
            console.log(theme);
          }}
          label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          classNameLabel="link__text"
          styleConfig={{
            backgroundCheckedColor: "var(--switchtoggle-bg)",
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
