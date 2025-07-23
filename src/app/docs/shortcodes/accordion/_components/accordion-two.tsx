"use client";
import Link from "next/link";
import { useState } from "react";
import "./style.scss";

const ToggleTwo = ({ title = true }) => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // Initially open first item

  const accordionData = [
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

  const toggleAccordion = (id: number) => {
    if (openItems.includes(id)) {
      // remove it (close)
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      // add it (open)
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div className="toggle_shortcode" id="accordion">
      <div className="shortcode_title">
        <h4 className="s_title load-order-2 smooth-scroll-heading" id="toggle">
          Toggle
          <Link
            className="anchorjs-link"
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#toggle"
            style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
          />
        </h4>
        {title && (
          <p>
            Switch from one effect, feature, or state to another by using a
            toggle.
          </p>
        )}
      </div>

      <div className="accordion">
        {accordionData.map((item) => (
          <div key={item.id} className="card doc_accordion">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAccordion(item.id);
                  }}
                  className={`toggle_btn ${
                    openItems.includes(item.id) ? "" : "collapsed"
                  }`}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded={openItems.includes(item.id)}
                  aria-controls="collapseOne"
                >
                  {item.title}
                </Link>
              </h5>
            </div>

            <div
              className={`accordion-content ${
                openItems.includes(item.id) ? "show" : ""
              }`}
            >
              <div className=" ">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleTwo;
