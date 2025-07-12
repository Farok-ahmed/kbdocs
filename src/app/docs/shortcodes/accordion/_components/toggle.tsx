"use client";

import Link from "next/link";
import React, { useState } from "react";

const Toggle: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleData = [
    {
      id: 1,
      title: "Super Professional",
      content:
        "A short rod of wood or plastic sewn to one side of a coat or other garment, pushed through a hole or loop on the other side and twisted so as to act as a fastener.",
    },
    {
      id: 2,
      title: "Dashboard",
      content:
        "He lost his bottle arse fanny around do one cheesed off crikey bevy mufty the full monty nancy boy cup of tea spend a penny, golly gosh what a plonker.",
    },
  ];

  const handleToggle = (id: number): void => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="toggle_shortcode">
      <div className="shortcode_title">
        <h4 className="s_title load-order-2 smooth-scroll-heading" id="toggle">
          Toggle
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#toggle"
            style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
          />
        </h4>
        <p>
          Switch from one effect, feature, or state to another by using a
          toggle.
        </p>
      </div>
      {toggleData.map((item) => (
        <div key={item.id}>
          <Link
            onClick={() => handleToggle(item.id)}
            className="toggle_btn"
            href=""
          >
            {item.title}
          </Link>
          <div
            className={`multi-collapse collapse ${
              openId === item.id ? "show" : ""
            }`}
            id=""
            style={{}}
          >
            <div className="card card-body toggle_body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toggle;
