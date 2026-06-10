import { useEffect } from "react";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      data-testid="modal-overlay"
      onClick={() => onClose()}
    >
      <div
        className="modal"
        data-testid="modal-content"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          aria-label="close"
          onClick={() => onClose()}
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
};