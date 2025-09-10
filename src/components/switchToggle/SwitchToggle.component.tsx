import { useState } from "react";
import styles from "./switchToggle.module.css";
import { SwitchToggleProps } from "./switchToggle.types";

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
    <label className={`${styles.switchToggle} ${classNameBackground}`}>
      <input
        type="checkbox"
        checked={isEnabled}
        onChange={handleChange}
        className={styles.input}
      />
      <span
        className={`${styles.slider} ${classNameSider}`}
        style={sliderStyle}
      >
        <span className={styles.knob} style={knobStyle} />
      </span>
      {label && (
        <span className={`${styles.switchLabel} ${classNameLabel}`}>
          {label}
        </span>
      )}
    </label>
  );
};
