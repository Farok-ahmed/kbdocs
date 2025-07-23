"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState("conclusions");

  const tabContent = {
    conclusions:
      "Don't get shirty with me what a plonker on your bike mate bugger all mate chip shop bits and bobs smashing mush bugger cup of char, in my flat.",
    forum:
      "This is the profile content. Don't get shirty with me what a plonker on your bike mate bugger all mate chip shop bits and bobs...",
    reporting:
      "This is the reporting content. Don't get shirty with me what a plonker on your bike mate bugger all mate chip shop bits and bobs...",
  };

  return (
    <div className="tab_shortcode" id="tabs">
      <h4 className="s_title smooth-scroll-heading" id="tab">
        Tabs
      </h4>

      {/* Tab Navigation */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "conclusions" ? "active" : ""
            }`}
            id="home-tab"
            onClick={() => setActiveTab("conclusions")}
            type="button"
            role="tab"
            aria-controls="conclusions"
            aria-selected={activeTab === "conclusions"}
          >
            Conclusions
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "forum" ? "active" : ""}`}
            id="profile-tab"
            onClick={() => setActiveTab("forum")}
            type="button"
            role="tab"
            aria-controls="forum"
            aria-selected={activeTab === "forum"}
          >
            Forum
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "reporting" ? "active" : ""}`}
            id="contact-tab"
            onClick={() => setActiveTab("reporting")}
            type="button"
            role="tab"
            aria-controls="reporting"
            aria-selected={activeTab === "reporting"}
          >
            Reporting
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="myTabContent">
        <AnimatePresence mode="wait" initial={false}>
          {activeTab === "conclusions" && (
            <motion.div
              key="conclusions"
              className="tab-pane fade active show"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {tabContent.conclusions}
            </motion.div>
          )}
          {activeTab === "forum" && (
            <motion.div
              key="forum"
              className="tab-pane fade active show"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {tabContent.forum}
            </motion.div>
          )}
          {activeTab === "reporting" && (
            <motion.div
              key="reporting"
              className="tab-pane fade active show"
              id="reporting"
              role="tabpanel"
              aria-labelledby="contact-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {tabContent.reporting}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomTabs;
