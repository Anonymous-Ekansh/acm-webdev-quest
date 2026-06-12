import { useState } from "react";
import "./Accordion.css";
export const Accordion = (props) => {
  const { items, allowMultiple, ...rest } = props;

  const [openItems, setOpenItems] = useState([]);

  function handleClick(id) {
    if (allowMultiple) {
      if (openItems.includes(id)) {
        setOpenItems(
          openItems.filter((item) => item !== id)
        );
      } else {
        setOpenItems([...openItems, id]);
      }
    } else {
      if (openItems.includes(id)) {
        setOpenItems([]);
      } else {
        setOpenItems([id]);
      }
    }
  }

  return (
    <div className="accordion" {...rest}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            className="accordion-item"
            key={item.id}
          >
            <button
              className="accordion-header"
              aria-expanded={
                isOpen ? "true" : "false"
              }
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </button>

            {isOpen && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};