"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.scss";
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
      { id: "both-sidebar", title: "Both Sidebar", href: "/docs/layouts" },
      {
        id: "left-sidebar",
        title: "Left Sidebar",
        href: "/docs/layouts/leftsidebar",
      },
      {
        id: "full-width",
        title: "Full-width",
        href: "/docs/layouts/layout-full",
      },
      {
        id: "sticky-menu",
        title: "Sticky Menu",
        href: "/docs/layouts/sticky-menu",
      },
      {
        id: "simple-footer",
        title: "Simple Footer",
        href: "/docs/layouts/simple-footer",
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
        href: "/docs/tour",
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
      { id: "code", title: "Code", href: "/docs/content/code" },
      { id: "image", title: "Image", href: "/docs/content/image" },
      { id: "video", title: "Video", href: "/docs/content/video" },
      {
        id: "Cheatsheet",
        title: "Cheatsheet",
        href: "/docs/content/cheatsheet",
      },
      {
        id: "keyboard",
        title: "Keyboard Shortcuts",
        href: "/docs/content/keyboard-shortcuts",
      },
    ],
  },
  {
    id: "changelog",
    title: "Change Log ",
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
  const pathname = usePathname();

  const handleOpen = (itemId: string) => {
    setOpenItemId(itemId);
  };
  useEffect(() => {
    mainNavItems.forEach((item) => {
      if (item.children.length > 0) {
        item.children.forEach((child) => {
          if (pathname === child.href) {
            setOpenItemId(item.id);
          }
        });
      } else if (pathname === item.href) {
        setOpenItemId(item.id);
      }
    });
  }, [pathname]);
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
              className={`nav-item  ${openItemId === item.id ? "active" : ""}`}
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
                  <ul
                    className={`list-unstyled dropdown_nav open ${
                      openItemId === item.id ? "menu-active" : ""
                    }`}
                  >
                    <div>
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={child.href}
                            className={pathname === child.href ? "active" : ""}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </div>
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
}

/**
 * Mobile version of the Sidebar component
 */
Sidebar.Mobile = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const pathname = usePathname();

  const handleOpen = (itemId: string) => {
    setOpenItemId(itemId);
  };
  useEffect(() => {
    mainNavItems.forEach((item) => {
      if (item.children.length > 0) {
        item.children.forEach((child) => {
          if (pathname === child.href) {
            setOpenItemId(item.id);
          }
        });
      } else if (pathname === item.href) {
        setOpenItemId(item.id);
      }
    });
  }, [pathname]);

  return (
    <aside className="doc_left_sidebarlist">
      <h2>KbDoc Documentation</h2>

      <div className="scroll">
        {/* Main Navigation */}
        <ul className="list-unstyled nav-sidebar">
          {mainNavItems.map((item) => (
            <li
              onClick={() => handleOpen(item.id)}
              key={item.id}
              className={`nav-item ${openItemId === item.id ? "active" : ""}`}
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

                  <AnimatePresence initial={false}>
                    {openItemId === item.id && (
                      <motion.ul
                        key={item.id}
                        className="list-unstyled dropdown_nav"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden", display: "block" }}
                      >
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
                      </motion.ul>
                    )}
                  </AnimatePresence>
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
