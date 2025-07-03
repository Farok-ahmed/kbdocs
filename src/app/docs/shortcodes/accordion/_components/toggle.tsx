"use client";

import React, { useState } from "react";

const Toggle: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string): void => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="toggle_shortcode">
      <div className="shortcode_title">
        <h4 className="s_title load-order-2" id="toggle">
          Toggle
          <a
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#toggle"
            style={{
              font: "1em / 1 anchorjs-icons",
              paddingLeft: "0.375em",
            }}
          />
        </h4>
        <p>
          Switch from one effect, feature, or state to another by using a
          toggle.
        </p>
      </div>

      {/* -- Toggle 1 -- */}
      <a
        className={`toggle_btn ${
          openId !== "multiCollapseExample1" ? "collapsed" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleToggle("multiCollapseExample1");
        }}
        href="#multiCollapseExample1"
        role="button"
        aria-expanded={openId === "multiCollapseExample1"}
        aria-controls="multiCollapseExample1"
      >
        Super Professional
      </a>
      <div
        className={`multi-collapse collapse ${
          openId === "multiCollapseExample1" ? "show" : ""
        }`}
        id="multiCollapseExample1"
      >
        <div className="card card-body toggle_body">
          A short rod of wood or plastic sewn to one side of a coat or other
          garment, pushed through a hole or loop on the other side and twisted
          so as to act as a fastener.
        </div>
      </div>

      {/* -- Toggle 2 -- */}
      <a
        className={`toggle_btn mt-1 ${
          openId !== "multiCollapseExample2" ? "collapsed" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleToggle("multiCollapseExample2");
        }}
        href="#multiCollapseExample2"
        role="button"
        aria-expanded={openId === "multiCollapseExample2"}
        aria-controls="multiCollapseExample2"
      >
        Dashboard
      </a>
      <div
        className={`multi-collapse collapse ${
          openId === "multiCollapseExample2" ? "show" : ""
        }`}
        id="multiCollapseExample2"
      >
        <div className="card card-body toggle_body">
          He lost his bottle arse fanny around do one cheesed off crikey bevy
          mufty the full monty nancy boy cup of tea spend a penny, golly gosh
          what a plonker.
        </div>
      </div>
    </div>
  );
};

export default Toggle;
