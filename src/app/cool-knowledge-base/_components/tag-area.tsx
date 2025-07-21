"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { tagsData } from "./tags";

const TagsArea = () => {
  // Set the initial active tab to the ID of the first item in your data
  const [activeTab, setActiveTab] = useState(tagsData[0].id);

  return (
    <>
      <section className="doc_tag_area">
        <div className="container">
          <div className="section_title text-center">
            <motion.h2
              className="h_title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Popular Tags
            </motion.h2>
          </div>

          {/* Interactive Tab Buttons */}

          <ul className="nav nav-tabs doc_tag" id="myTab" role="tablist">
            {tagsData.map((tag, index) => (
              <motion.li
                key={tag.id}
                className="nav-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onClick={() => setActiveTab(tag.id)}
              >
                <button
                  className={`nav-link ${activeTab === tag.id ? "active" : ""}`}
                  id={`${tag.id}-tab`}
                  role="tab"
                  aria-controls={tag.id}
                  aria-selected={activeTab === tag.id}
                >
                  {tag.title}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Corresponding Tab Content */}
          <div className="tab-content" id="myTabContent">
            {tagsData.map((tag) => (
              <div
                key={tag.id}
                // The 'show' and 'active' classes are now controlled by the activeTab state
                className={`tab-pane doc_tab_pane fade ${
                  activeTab === tag.id ? "show active" : ""
                }`}
                id={tag.id}
                role="tabpanel"
                aria-labelledby={`${tag.id}-tab`}
              >
                <div className="row">
                  {tag.sections.map((section, index) => (
                    <div key={index} className="col-lg-4 col-sm-6">
                      <motion.div
                        className="doc_tag_item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="doc_tag_title">
                          <h4>{section.title}</h4>
                          <div className="line"></div>
                        </div>
                        <ul className="list-unstyled tag_list">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link href="">
                                <i className="icon_document_alt"></i>
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link href="" className="learn_btn">
                          View All
                          <i className="arrow_right"></i>
                        </Link>
                      </motion.div>
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

export default TagsArea;
