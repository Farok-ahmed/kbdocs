"use client";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export default function NavToggler({ isExpanded, setIsExpanded }: Props) {
  return (
    <button
      className={`navbar-toggler ${isExpanded ? "" : "collapsed"}`}
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setIsExpanded((v) => !v)}
    >
      <span className="menu_toggle">
        <span className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="hamburger-cross">
          <span></span>
          <span></span>
        </span>
      </span>
    </button>
  );
}
