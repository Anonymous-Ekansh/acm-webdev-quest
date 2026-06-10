import { useState } from "react";
import "./Tooltip.css";

export const Tooltip = (props) => {
  const [show, setShow] = useState(false);

  function showTooltip() {
    setShow(true);
  }

  function hideTooltip() {
    setShow(false);
  }

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {props.children}

      {show ? (
        <span className="tooltip-content" role="tooltip">
          {props.content}
        </span>
      ) : null}
    </div>
  );
};