import { useEffect } from "react";
import "./Toast.css";

export const Toast = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onClose();
    }, props.duration || 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [props.onClose, props.duration]);

  return (
    <div
      className={"toast toast-" + (props.variant || "success")}
      role="alert"
    >
      <span>{props.message}</span>

      <button
        aria-label="close"
        onClick={props.onClose}
      >
        ×
      </button>
    </div>
  );
};
