"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Accordion from "./accordion";
import { faqData } from "./faq-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

const FaqArea = () => {
  const [activeTab, setActiveTab] = useState(faqData[0].id);

  return (
    <section className="doc_faq_area sec_pad">
      <div className="container">
        <div className="section_title text-center">
          <motion.h2
            className="h_title"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Do you have any Question?
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Loaded with awesome features like Documentation, Knowledgebase,
            Forum & more!
          </motion.p>
        </div>

        {/* Dynamic Tab Buttons */}
        <ul className="nav nav-tabs doc_tag" id="myTabthree" role="tablist">
          {faqData.map((tab, index) => (
            <motion.li
              key={tab.id}
              className="nav-item"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft(index * 0.1)}
              onClick={() => setActiveTab(tab.id)}
            >
              <button
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.title}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Dynamic Tab Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="tab-content"
          id="myTabContentthree"
        >
          {faqData.map((tab) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={tab.id}
              className={`tab-pane faq_tab_pane fade ${
                activeTab === tab.id ? "show active" : ""
              }`}
              role="tabpanel"
            >
              <div className="row">
                {tab.columns.map((column, index) => (
                  <div key={index} className="col-lg-6">
                    <Accordion
                      items={column.items}
                      accordionId={column.accordionId}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqArea;
