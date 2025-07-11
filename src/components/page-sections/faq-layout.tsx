"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";

// Define types
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: number | string;
  title: string;
  icon: string;
  content: FaqItem[];
}

interface FaqLayoutProps {
  data: FaqCategory[];
}

const FaqLayout: FC<FaqLayoutProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    setOpenFaqIndex(0);
  };

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const activeContent = data[activeIndex]?.content || [];

  return (
    <div className="row">
      {/* Left Navigation */}
      <div className="col-lg-4 col-md-5">
        <div className="fact_navigation_info">
          <h4 className="c_head">Quick Navigation</h4>
          <ul className="nav nav-tabs fact_navigation" role="tablist">
            {data.map((item, index) => (
              <li className="nav-item" key={item.id}>
                <Link
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
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Accordion Content */}
      <div className="col-lg-8 col-md-7">
        <div className="tab-content pl_70">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              className="tab-pane faq_tab_pane fade show active"
              role="tabpanel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="accordion doc_faq_info" id="accordionExample">
                {activeContent.length > 0 ? (
                  activeContent.map((faqItem, index) => {
                    const isFaqOpen = openFaqIndex === index;
                    return (
                      <div className="card wow fadeInUp" key={index}>
                        <div className="card-header" id={`heading${index}`}>
                          <h2 className="mb-0">
                            <button
                              style={{
                                boxShadow: "none",
                              }}
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
                        <AnimatePresence initial={false}>
                          {isFaqOpen && (
                            <motion.div
                              key={index}
                              id={`collapse${index}`}
                              className={`collapse show`}
                              aria-labelledby={`heading${index}`}
                              data-parent="#accordionExample"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: "easeInOut" }}
                              style={{ overflow: "hidden" }}
                            >
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                              >
                                <div className="card-body">
                                  {faqItem.answer}
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })
                ) : (
                  <div className="card">
                    <div className="card-body">
                      No information available for this topic.
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FaqLayout;
