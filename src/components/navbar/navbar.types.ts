export interface NavLink {
  path: string;
  label: string;
}

export interface NavbarProps {
  showThemeButton?: boolean;
  links?: NavLink[];
}
