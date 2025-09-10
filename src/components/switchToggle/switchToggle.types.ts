export interface SwitchToggleStyle {
  backgroundColor?: string;
  backgroundBeforeColor?: string;
  backgroundCheckedColor?: string;
}

export interface SwitchToggleProps {
  defaultChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  label?: string;
  classNameLabel?: string;
  classNameSider?: string;
  classNameBackground?: string;
  styleConfig?: SwitchToggleStyle;
}
