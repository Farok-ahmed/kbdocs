"use client"; // if using Next.js App Router

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface Tab {
  id: string;
  title: string;
  number: number;
  content: React.ReactNode;
}

const tabsData: Tab[] = [
  {
    id: "card",
    title: "Card",
    number: 1,
    content: (
      <>
        <p>
          Twit brilliant he legged it he nicked it amongst hotpot chinwag spend
          a penny lemon squeezy he lost his bottle porkies, Why it's your round
          happy days.
        </p>
        <div className="version">
          <div className="v_head">KbDoc run hello-world</div>
          <div className="v_middle">
            <p>
              Unable to find image{" "}
              <span className="red">'hello-world:latest'</span> locally
            </p>
            <p>latest: Pulling from library/hello-world</p>
            <p>
              ca4f61b1923c: Pull <span className="green">complete</span>
            </p>
            <p>Status: Downloaded newer image for hello-world:latest</p>
          </div>
          <div className="v_footer">
            <p>
              Hello from KbDoc!
              <br />
              This message shows that your installation appears to be working
              correctly.
            </p>
          </div>
        </div>
        <p>
          <span>Usage:</span> Click "Submit" to create a token.
        </p>
      </>
    ),
  },
  {
    id: "customer",
    title: "Customer",
    number: 2,
    content: (
      <>
        <p>
          Tristique omnis? Hymenaeos montes facilisi magnam facilisi ante
          voluptates odio nulla exercitationem tincidunt maecenas, dolores
          mauris praesent placeat
        </p>
        <div className="version">
          <p>
            Vivamus vero netus tristique venenatis excepteur nisl diamlorem
            nobis dolorem consequatur repellendus voluptatibus sit voluptas
            similique taciti pariatur, veniam, consequatur.
          </p>
          <p>
            Maecenas tempore facilis temporibus quas! Eius illo optio, rhoncus
            expedita doloremque gravida, aptent, pariatur porro
          </p>
          <p>
            Tristique omnis? Hymenaeos montes facilisi magnam facilisi ante
            voluptates odio nulla exercitationem tincidunt maecenas, dolores
            mauris praesent placeat
          </p>
        </div>
        <p>
          <span>Usage:</span> Click "Submit" to create a token.
        </p>
      </>
    ),
  },
  {
    id: "charge",
    title: "Charge",
    number: 3,
    content: (
      <>
        <p>
          Twit brilliant he legged it he nicked it amongst hotpot chinwag spend
          a penny lemon squeezy he lost his bottle porkies, Why it's your round
          happy days.
        </p>
        <div className="version">
          <div className="v_head">KbDoc run hello-world</div>
          <div className="v_middle">
            <p>
              Unable to find image{" "}
              <span className="red">'hello-world:latest'</span> locally
            </p>
            <p>latest: Pulling from library/hello-world</p>
            <p>
              ca4f61b1923c: Pull <span className="green">complete</span>
            </p>
            <p>Status: Downloaded newer image for hello-world:latest</p>
          </div>
          <div className="v_footer">
            <p>
              Hello from KbDoc!
              <br />
              This message shows that your installation appears to be working
              correctly.
            </p>
          </div>
        </div>
        <p>
          <span>Usage:</span> Click "Submit" to create a token.
        </p>
      </>
    ),
  },
  {
    id: "sub",
    title: "Subscription",
    number: 4,
    content: (
      <>
        <p>
          Twit brilliant he legged it he nicked it amongst hotpot chinwag spend
          a penny lemon squeezy he lost his bottle porkies, Why it's your round
          happy days.
        </p>
        <div className="version">
          <div className="v_head">KbDoc run hello-world</div>
          <div className="v_middle">
            <p>
              Unable to find image{" "}
              <span className="red">'hello-world:latest'</span> locally
            </p>
            <p>latest: Pulling from library/hello-world</p>
            <p>
              ca4f61b1923c: Pull <span className="green">complete</span>
            </p>
            <p>Status: Downloaded newer image for hello-world:latest</p>
          </div>
          <div className="v_footer">
            <p>
              Hello from KbDoc!
              <br />
              This message shows that your installation appears to be working
              correctly.
            </p>
          </div>
        </div>
        <p>
          <span>Usage:</span> Click "Submit" to create a token.
        </p>
      </>
    ),
  },
  {
    id: "success",
    title: "Success!",
    number: 5,
    content: (
      <>
        <p>
          Twit brilliant he legged it he nicked it amongst hotpot chinwag spend
          a penny lemon squeezy he lost his bottle porkies, Why it's your round
          happy days.
        </p>
        <div className="version">
          <div className="v_head">KbDoc run hello-world</div>
          <div className="v_middle">
            <p>
              Unable to find image{" "}
              <span className="red">'hello-world:latest'</span> locally
            </p>
            <p>latest: Pulling from library/hello-world</p>
            <p>
              ca4f61b1923c: Pull <span className="green">complete</span>
            </p>
            <p>Status: Downloaded newer image for hello-world:latest</p>
          </div>
          <div className="v_footer">
            <p>
              Hello from KbDoc!
              <br />
              This message shows that your installation appears to be working
              correctly.
            </p>
          </div>
        </div>
        <p>
          <span>Usage:</span> Click "Submit" to create a token.
        </p>
      </>
    ),
  },
];

export default function DynamicTabs() {
  const [activeIndex, setActiveIndex] = useState(
    tabsData.findIndex((tab) => tab.id === "charge")
  );
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % tabsData.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + tabsData.length) % tabsData.length
    );
  };
  return (
    <div className="process_tab_shortcode">
      <ul className="nav nav-tabs v_menu" role="tablist">
        {tabsData.map((tab, index) => (
          <li className="nav-item" key={tab.id}>
            <Link
              className={classNames("nav-link", {
                active: activeIndex === index,
              })}
              id={`${tab.id}-tab`}
              href={`#${tab.id}`}
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeIndex === index}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            >
              <span>{tab.number}</span>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContents">
        <AnimatePresence mode="wait" initial={false}>
          {tabsData.map((tab, index) =>
            activeIndex === index ? (
              <motion.div
                key={tab.id}
                className={classNames("tab-pane fade show active")}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {tab.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        <button
          className="btn btn-info btn-lg previous"
          onClick={handlePrevious}
        >
          <i className="arrow_carrot-left" />
        </button>
        <button className="btn btn-info btn-lg next" onClick={handleNext}>
          <i className="arrow_carrot-right" />
        </button>
      </div>
    </div>
  );
}
