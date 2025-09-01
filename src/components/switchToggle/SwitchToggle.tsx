import { useState } from "react";
import "./switchToggle.css";

interface SwitchToggleStyle {
  backgroundColor?: string | "";
  backgroundBeforeColor?: string | "";
  backgroundCheckedColor?: string | "";
}

interface SwitchToggleProps {
  defaultChecked?: boolean;
  onToggle?: (checked: boolean) => void;
  label?: string;
  classNameLabel?: string;
  classNameSider?: string;
  classNameBackground?: string;
  styleConfig?: SwitchToggleStyle;
}

export const SwitchToggle: React.FC<SwitchToggleProps> = ({
  defaultChecked = false,
  onToggle,
  label,
  classNameLabel = "",
  classNameSider = "",
  classNameBackground = "",
  styleConfig,
}) => {
  const [isEnabled, setIsEnabled] = useState(defaultChecked);

  const handleChange = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onToggle?.(newValue);
  };

  const sliderStyle = {
    backgroundColor: isEnabled
      ? styleConfig?.backgroundCheckedColor
      : styleConfig?.backgroundColor,
  };

  const knobStyle = {
    backgroundColor: styleConfig?.backgroundBeforeColor,
  };

  return (
    <label className={`switch-toggle ${classNameBackground}`}>
      <input type="checkbox" checked={isEnabled} onChange={handleChange} />
      <span className={`slider ${classNameSider}`} style={sliderStyle}>
        <span className="knob" style={knobStyle} />
      </span>
      {label && (
        <span className={`switch-label ${classNameLabel}`}>{label}</span>
      )}
    </label>
  );
};
