"use client";

import { useState } from "react";
import Accordion from "./accordion";
import { faqData } from "./faq-data";

const FaqArea = () => {
  const [activeTab, setActiveTab] = useState(faqData[0].id);

  return (
    <>
      <section className="doc_faq_area sec_pad">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="h_title wow fadeInUp">Do you have any Question?</h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Loaded with awesome features like Documentation, Knowledgebase,
              Forum & more!
            </p>
          </div>

          {/* Dynamic Tab Buttons */}
          <ul className="nav nav-tabs doc_tag" id="myTabthree" role="tablist">
            {faqData.map((tab, index) => (
              <li
                key={tab.id}
                className="nav-item wow fadeInLeft"
                data-wow-delay={`${index * 0.1}s`}
                onClick={() => setActiveTab(tab.id)}
              >
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Dynamic Tab Content */}
          <div className="tab-content" id="myTabContentthree">
            {faqData.map((tab) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
