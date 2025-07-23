"use-client";
import { useState } from "react";

const Accordion = ({
  items,
}: {
  items: Array<{ id?: string; title: string; content: React.ReactNode }>;
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion doc_faq_info" id="accordionExample">
      {items.map((item, index) => {
        const isItemOpen = openIndex === index;

        return (
          <div key={item.id || index} className="card wow fadeInUp">
            <div className="card-header" id={`heading${index}`}>
              <h2 className="mb-0">
                <button
                  className={`btn btn-link btn-block text-left ${
                    isItemOpen ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => handleItemClick(index)}
                  aria-expanded={isItemOpen}
                  aria-controls={`collapse${index}`}
                >
                  {item.title}

                  {isItemOpen ? (
                    <i className="icon_minus-06"></i>
                  ) : (
                    <i className="icon_plus"></i>
                  )}
                </button>
              </h2>
            </div>

            <div
              id={`collapse${index}`}
              className={`collapse ${isItemOpen ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-parent="#accordionExample"
            >
              <div className="card-body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
