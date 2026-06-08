import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = (props) => {
  const {
    defaultChecked,
    checked,
    onChange,
    disabled,
    id,
    label,
    ...rest
  } = props;

  const [checkedState, setCheckedState] = useState(
    defaultChecked || false
  );

  const isControlled = checked !== undefined;

  const checkedValue = isControlled
    ? checked
    : checkedState;

  function handleChange(event) {
    if (!isControlled) {
      setCheckedState(event.target.checked);
    }

    if (onChange) {
      onChange(event);
    }
  }

  return (
    <div className="toggle-switch" {...rest}>
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checkedValue}
        onChange={handleChange}
        disabled={disabled}
      />

      <span
        className={
          checkedValue
            ? "toggle-slider toggle-slider-on"
            : "toggle-slider"
        }
      />

      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};