"use client";
import Link from "next/link";
import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(1);

  const accordionData = [
    {
      id: 1,
      title: "Meaning of Accordion",
      content:
        "An accordion is similar in purpose to a tabbed interface, a list of items where exactly one item is expanded into a panel (i.e. list items are shortcuts to access separate panels).",
    },
    {
      id: 2,
      title: "Online Marketing",
      content:
        "He lost his bottle arse fanny around do one cheesed off crikey bevy mufty the full monty nancy boy cup of tea spend a penny, golly gosh what a plonker.",
    },
    {
      id: 3,
      title: "Amazing Support",
      content:
        "He lost his bottle arse fanny around do one cheesed off crikey\n <br> bevy mufty the full monty nancy boy cup of tea spend a penny, golly gosh what a plonker.",
    },
  ];

  const toggle = (id: number) => {
    setIsOpen(isOpen === id ? null : id);
  };
  return (
    <>
      <div className="accordion_shortcode">
        <div className="shortcode_title">
          <h4
            className="s_title load-order-2 smooth-scroll-heading"
            id="accordions"
          >
            Accordion
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#accordions"
              style={{
                font: "1em / 1 anchorjs-icons",
                paddingLeft: "0.375em",
              }}
            />
          </h4>
          <p>
            The accordion is a graphical control element comprising a vertically
            stacked list of items, such as labels or thumbnails.
          </p>
        </div>
        <div id="accordion">
          {accordionData.map((item) => (
            <div key={item.id} className="card doc_accordion">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    onClick={() => toggle(item.id)}
                    className={`btn btn-link collapsed ${
                      isOpen === item.id ? "" : ""
                    }`}
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {item.title}
                    {isOpen === item.id ? (
                      <i className="icon_minus-06" />
                    ) : (
                      <i className="icon_plus" />
                    )}
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className={`accordion-content ${
                  isOpen === item.id ? "show" : ""
                }`}
                aria-labelledby="headingOne"
                data-parent="#accordion"
                style={{}}
              >
                <div className="">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
