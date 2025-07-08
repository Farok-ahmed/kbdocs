"use client";
import { useState } from "react";

interface CheatsheetItem {
  number: string;
  english: string;
  german: string;
}

interface CheatsheetSection {
  id: string;
  title: string;
  items: CheatsheetItem[];
}

const cheatsheetSections: CheatsheetSection[] = [
  {
    id: "auxiliary",
    title: "Auxiliary",
    items: [
      { number: "#1", english: "be", german: "Sein" },
      { number: "#2", english: "have", german: "haben" },
      { number: "#3", english: "become", german: "werden" },
      { number: "#4", english: "can", german: "konnen" },
      { number: "#1", english: "must", german: "Sein" },
      { number: "#2", english: "may", german: "haben" },
      { number: "#3", english: "like", german: "durfen" },
    ],
  },
  {
    id: "modals",
    title: "Modals",
    items: [
      { number: "#1", english: "can", german: "Sein" },
      { number: "#2", english: "should", german: "haben" },
      { number: "#3", english: "become", german: "werden" },
      { number: "#4", english: "want", german: "konnen" },
      { number: "#3", english: "like", german: "durfen" },
      { number: "#1", english: "must", german: "Sein" },
      { number: "#2", english: "may", german: "haben" },
      { number: "#4", english: "can", german: "konnen" },
    ],
  },
  {
    id: "useful",
    title: "Useful",
    items: [
      { number: "#1", english: "be", german: "Sein" },
      { number: "#2", english: "have", german: "haben" },
      { number: "#3", english: "become", german: "werden" },
      { number: "#4", english: "can", german: "konnen" },
    ],
  },
];

export default function CheatsheetAccordion() {
  const [openId, setOpenId] = useState<string | null>(
    cheatsheetSections[0]?.id ?? null
  );

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="cheatsheet_info">
      <div
        className="accordion cheatsheet_accordian"
        id="accordionExampleatlas"
      >
        {cheatsheetSections.map((section) => (
          <div key={section.id} className="card" id={section.id}>
            <div className="card-header" id={`heading-${section.id}`}>
              <h2 className="mb-0">
                <button
                  className={`btn btn-link ${
                    openId === section.id ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(section.id)}
                  aria-expanded={openId === section.id}
                  aria-controls={`collapse-${section.id}`}
                >
                  {section.title}
                  {/* span class pluse */}
                  <span className="">
                    {openId === section.id ? "[-]" : "[+]"}
                  </span>
                </button>
              </h2>
            </div>

            {openId === section.id && (
              <div
                id={`collapse-${section.id}`}
                className="collapse show"
                aria-labelledby={`heading-${section.id}`}
              >
                <div className="row">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="col-lg-3">
                      <div className="cheatsheet_item">
                        <div className="cheatsheet_num">{item.number}</div>
                        <p>{item.english}</p>
                        <h4>{item.german}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
