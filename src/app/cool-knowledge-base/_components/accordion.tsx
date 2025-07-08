"use client";
import { useState } from "react";
import { AccordionItem } from "./types";

const Accordion = ({
  items,
  accordionId,
}: {
  items: AccordionItem[];
  accordionId: string;
}) => {
  const defaultOpenIndex = items.findIndex((item) => item.isOpen);

  const [openItem, setOpenItem] = useState(defaultOpenIndex);

  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="accordion doc_faq_info" id={accordionId}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`card ${openItem === index ? "active" : ""}`}
        >
          <div className="card-header" id={`heading${accordionId}${index}`}>
            <h2 className="mb-0">
              <button
                className={`btn btn-link ${
                  openItem !== index ? "collapsed" : ""
                }`}
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={openItem === index}
                aria-controls={`collapse${accordionId}${index}`}
              >
                {item.question}
                <i className="icon_plus"></i>
                <i className="icon_minus-06"></i>
              </button>
            </h2>
          </div>
          <div
            id={`collapse${accordionId}${index}`}
            className={`collapse ${openItem === index ? "show" : ""}`}
            aria-labelledby={`heading${accordionId}${index}`}
            data-parent={`#${accordionId}`}
          >
            <div className="card-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
