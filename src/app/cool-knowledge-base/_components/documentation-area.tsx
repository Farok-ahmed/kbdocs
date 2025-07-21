"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const documentationData = [
  {
    id: "docly",
    title: "Docly",
    featured: {
      icon: "/img/home_one/icon/file1.png",
      title: "Build Any Page In Seconds",
      description:
        "Omnis voluptate magna inceptos id velit autem, harum phasellus quo. Officia congue, natoque imperdiet iusto malesuada placerat. Augue temporibus",
      link: "/learn-more",
    },
    items: [
      {
        icon: "/img/home_one/icon/folder.png",
        title: "Working with Docs",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/envelope.png",
        title: "Formatting Content",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/smartphone.png",
        title: "Mobile Apps",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/management.png",
        title: "Account Management",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/newspaper.png",
        title: "Productivity",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/android.png",
        title: "Getting Started",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
    ],
  },
  {
    id: "sdoc",
    title: "Sdoc",
    featured: {
      icon: "/img/home_one/icon/file1.png",
      title: "Streamlined Documentation",
      description:
        "Discover the ease of creating and managing your documentation with Sdoc. A powerful and intuitive platform.",
      link: "/learn-more",
    },
    items: [
      {
        icon: "/img/home_one/icon/smartphone.png",
        title: "Mobile Apps",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/management.png",
        title: "Account Management",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/folder.png",
        title: "Working with Docs",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
    ],
  },
  {
    id: "spider-docs",
    title: "Spider Docs",
    featured: {
      icon: "/img/home_one/icon/file1.png",
      title: "Organize with Spider Docs",
      description:
        "Efficiently structure and access your documents. Spider Docs helps you keep everything in order.",
      link: "/learn-more",
    },
    items: [
      {
        icon: "/img/home_one/icon/envelope.png",
        title: "Formatting Content",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
      {
        icon: "/img/home_one/icon/newspaper.png",
        title: "Productivity",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
    ],
  },
  {
    id: "wikidoc",
    title: "WikiDoc",
    featured: {
      icon: "/img/home_one/icon/file1.png",
      title: "Collaborate with WikiDoc",
      description:
        "A collaborative platform for creating and sharing knowledge. Build your wiki with ease.",
      link: "/learn-more",
    },
    items: [
      {
        icon: "/img/home_one/icon/android.png",
        title: "Getting Started",
        description: "He lost his bottle bubble and squeak knackered.!",
      },
    ],
  },
];

const DocumentationArea = () => {
  const [activeTab, setActiveTab] = useState(documentationData[0].id);
  const activeTabData = documentationData.find((tab) => tab.id === activeTab);

  return (
    <section className="h_doc_documentation_area bg_color sec_pad">
      <div className="container">
        <div className="section_title text-center">
          <motion.h2
            className="h_title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The Best Online Documentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Loaded with awesome features like Documentation, Knowledgebase,
            Forum & more!
          </motion.p>
        </div>

        <ul
          className="nav nav-tabs documentation_tab"
          id="myTabs"
          role="tablist"
        >
          {documentationData.map((tab, i) => (
            <li className="nav-item" key={tab.id}>
              <Link
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                id={`${tab.id}-tab`}
                data-toggle="tab"
                href={`#${tab.id}`}
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="tab-content" id="myTabContents">
          {activeTabData && (
            <div
              className="tab-pane documentation_tab_pane fade show active"
              id={activeTabData.id}
              role="tabpanel"
              aria-labelledby={`${activeTabData.id}-tab`}
            >
              <div className="row">
                <div className="col-lg-4">
                  <div className="documentation_text">
                    <motion.div
                      className="round"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={activeTabData.featured.icon}
                        alt={activeTabData.featured.title}
                      />
                    </motion.div>
                    <motion.h4
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {activeTabData.featured.title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {activeTabData.featured.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Link
                        href={activeTabData.featured.link}
                        className="learn_btn"
                      >
                        Learn More <i className="arrow_right"></i>
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    {activeTabData.items.map((item, index) => (
                      <div className="col-sm-6" key={index}>
                        <motion.div
                          className="media documentation_item"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2 * (index + 1),
                          }}
                        >
                          <div className="icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                          <div className="media-body">
                            <Link href="">
                              <h5>{item.title}</h5>
                            </Link>
                            <p>{item.description}</p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentationArea;
