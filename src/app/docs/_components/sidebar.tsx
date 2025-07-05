"use client";
import Link from "next/link";
import { useState } from "react";

const mainNavItems = [
  {
    id: "home",
    title: "Home",
    href: "/docs",
    icon: "/img/side-nav/home.png",
    active: true,
    children: [],
  },
  {
    id: "shortcodes",
    title: "Shortcodes",
    href: "/docs/shortcodes",
    icon: "/img/side-nav/briefcase.png",
    active: false,
    children: [
      { id: "tabs", title: "Tabs", href: "/docs/shortcodes/tab", active: true },
      {
        id: "accordion",
        title: "Accordion",
        href: "/docs/shortcodes/accordion",
      },
      { id: "notices", title: "Notices", href: "/docs/shortcodes/notice" },
      { id: "table", title: "Table", href: "/docs/shortcodes/table" },
      {
        id: "lightbox",
        title: "Image Lightbox",
        href: "/docs/shortcodes/lightbox",
      },
      { id: "tooltip", title: "Tooltip", href: "/docs/shortcodes/tooltip" },
      { id: "can-use", title: "Can I Use", href: "/docs/shortcodes/can-use" },
    ],
  },
  {
    id: "layouts",
    title: "Layouts",
    href: "/docs/layouts",
    icon: "/img/side-nav/coding.png",
    active: false,
    children: [
      { id: "both-sidebar", title: "Both Sidebar", href: "/layouts" },
      {
        id: "left-sidebar",
        title: "Left Sidebar",
        href: "/layout-leftsidebar",
      },
      { id: "full-width", title: "Full-width", href: "/layout-full" },
      {
        id: "sticky-menu",
        title: "Sticky Menu",
        href: "/sticky-menu",
      },
      {
        id: "simple-footer",
        title: "Simple Footer",
        href: "/simple-footer",
      },
    ],
  },
  {
    id: "tour",
    title: "Tour",
    href: "/docs/tour",
    icon: "/img/side-nav/chat1.png",
    active: false,
    children: [
      {
        id: "image-hotspots",
        title: "Image Hotspots",
        href: "/docs/tour/image-pointing",
      },
      {
        id: "app-interface",
        title: "Application Interface",
        href: "/tour",
      },
    ],
  },
  {
    id: "content",
    title: "Content",
    href: "/typography",
    icon: "/img/side-nav/document.png",
    active: false,
    children: [
      { id: "typography", title: "Typography", href: "/typography" },
      { id: "code", title: "Code", href: "/docs/code" },
      { id: "image", title: "Image", href: "/docs/image" },
      { id: "video", title: "Video", href: "/docs/video" },
      {
        id: "keyboard",
        title: "Keyboard Shortcuts",
        href: "/docs/keyboard-shortcuts",
      },
    ],
  },
  {
    id: "changelog",
    title: "Change Log",
    href: "/docs/changelog",
    icon: "/img/side-nav/document2.png",
    active: false,
    children: [],
  },
];

// Additional navigation sections
const codingNavItems = [
  {
    id: "account",
    title: "Account",
    href: "",
    icon: "/img/side-nav/account.png",
  },
  {
    id: "development",
    title: "Development",
    href: "",
    icon: "/img/side-nav/coding.png",
  },
];

const bottomNavItems = [
  {
    id: "location",
    title: "Unlted States",
    href: "",
    icon: "/img/side-nav/united-states.png",
  },
  {
    id: "language",
    title: "English",
    href: "",
    icon: "/img/side-nav/edit.png",
  },
  {
    id: "signin",
    title: "Sign In",
    href: "",
    icon: "/img/side-nav/users.png",
    hasArrow: true,
  },
];

export default function Sidebar() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const handleOpen = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };
  return (
    <aside className="doc_left_sidebarlist" style={{ paddingBottom: 70 }}>
      {/* Toggle Controls */}
      <div className="open_icon" id="left">
        <i className="arrow_carrot-right"></i>
        <i className="arrow_carrot-left"></i>
      </div>

      {/* Scrollable Content */}
      <div className="scroll">
        {/* Main Navigation */}
        <ul className="list-unstyled nav-sidebar">
          {mainNavItems.map((item) => (
            <li
              onClick={() => handleOpen(item.id)}
              key={item.id}
              className={`nav-item ${item.active ? "active" : ""}`}
            >
              <Link href={item.href} className="nav-link">
                <img src={item.icon} alt="" />
                {item.title}
              </Link>

              {item.children.length > 0 && (
                <>
                  <span className="icon">
                    <i className="arrow_carrot-down"></i>
                  </span>
                  {openItemId === item.id && (
                    <ul
                      className="list-unstyled dropdown_nav"
                      style={{
                        display: openItemId === item.id ? "block " : "none",
                      }}
                    >
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link href={child.href}>{child.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* <ul className="list-unstyled dropdown_nav">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link href={child.href}>{child.title}</Link>
                      </li>
                    ))}
                  </ul> */}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Coding Navigation */}
        <ul className="list-unstyled nav-sidebar coding_nav">
          {codingNavItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link href={item.href} className="nav-link">
                <img src={item.icon} alt="" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Navigation */}
        <ul className="list-unstyled nav-sidebar bottom_nav">
          {bottomNavItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link href={item.href} className="nav-link">
                <img src={item.icon} alt="" />
                {item.title} {item.hasArrow && <i className="arrow_right"></i>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

/**
 * Mobile version of the Sidebar component
 */
Sidebar.Mobile = () => {
  return (
    <aside className="doc_left_sidebarlist">
      <h2>KbDoc Documentation</h2>

      {/* Scrollable Content */}
      <div className="scroll">
        {/* Main Navigation */}
        <ul className="list-unstyled nav-sidebar">
          {mainNavItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${item.active ? "active" : ""}`}
            >
              <Link href={item.href} className="nav-link">
                <img src={item.icon} alt="" />
                {item.title}
              </Link>

              {item.children.length > 0 && (
                <>
                  <span className="icon">
                    <i className="arrow_carrot-down"></i>
                  </span>
                  <ul className="list-unstyled dropdown_nav">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          className={child.active ? "active" : ""}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Coding Navigation */}
        <ul className="list-unstyled nav-sidebar coding_nav">
          {codingNavItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link href={item.href} className="nav-link">
                <img src={item.icon} alt="" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Navigation */}
        <ul className="list-unstyled nav-sidebar bottom_nav">
          {bottomNavItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link href={item.href} className="nav-link">
                <img src={item.icon} alt="" />
                {item.title} {item.hasArrow && <i className="arrow_right"></i>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
