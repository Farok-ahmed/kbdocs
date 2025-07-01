"use client";
import { useState } from "react";

const FaqLayout = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleNavClick = (index) => {
    setActiveIndex(index);
    setOpenFaqIndex(0);
  };

  const handleFaqClick = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const activeContent = data[activeIndex]?.content || [];

  return (
    <div className="row">
      {/* ====== Left Navigation Menu ====== */}
      <div className="col-lg-4 col-md-5">
        <div className="fact_navigation_info">
          <h4 className="c_head">Quick Navigation</h4>
          <ul
            className="nav nav-tabs fact_navigation"
            id="myTab"
            role="tablist"
          >
            {data.map((item, index) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${
                    activeIndex === index ? "active" : ""
                  }`}
                  href={`#${item.id}`}
                  role="tab"
                  aria-selected={activeIndex === index}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(index);
                  }}
                >
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ====== Right Content & Accordion Area ====== */}
      <div className="col-lg-8 col-md-7">
        <div className="tab-content pl_70" id="myTabContent">
          {/* This single tab-pane is now fully dynamic */}
          <div
            className="tab-pane faq_tab_pane fade show active"
            role="tabpanel"
          >
            <div className="accordion doc_faq_info" id="accordionExample">
              {/* Check if there's content to display */}
              {activeContent.length > 0 ? (
                activeContent.map((faqItem, index) => {
                  const isFaqOpen = openFaqIndex === index;
                  return (
                    <div className="card wow fadeInUp" key={index}>
                      <div className="card-header" id={`heading${index}`}>
                        <h2 className="mb-0">
                          <button
                            className={`btn btn-link ${
                              !isFaqOpen ? "collapsed" : ""
                            }`}
                            type="button"
                            aria-expanded={isFaqOpen}
                            onClick={() => handleFaqClick(index)}
                          >
                            {faqItem.question}
                            <i className="icon_plus"></i>
                            <i className="icon_minus-06"></i>
                          </button>
                        </h2>
                      </div>
                      <div
                        id={`collapse${index}`}
                        className={`collapse ${isFaqOpen ? "show" : ""}`}
                        aria-labelledby={`heading${index}`}
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">{faqItem.answer}</div>
                      </div>
                    </div>
                  );
                })
              ) : (
                // Display a message if the content array is empty
                <div className="card">
                  <div className="card-body">
                    No information available for this topic.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqLayout;
