"use client";

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
    <div className="tab_shortcode">
      <h4 className="s_title" id="tab">
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
        <div
          className={`tab-pane fade ${
            activeTab === "conclusions" ? "active show" : ""
          }`}
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {tabContent.conclusions}
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "forum" ? "active show" : ""
          }`}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {tabContent.forum}
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "reporting" ? "active show" : ""
          }`}
          id="reporting"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          {tabContent.reporting}
        </div>
      </div>
    </div>
  );
};

export default CustomTabs;
