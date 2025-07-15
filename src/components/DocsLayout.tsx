"use client";

import Navbar from "@/components/page-sections/navbar";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FontSwitcher from "./_components/font-switcher";
import ModeSwitcher from "./_components/mode-switcher";
import OSSelector from "./_components/os-selector";
import Search from "./_components/search";
import Sidebar from "./_components/sidebar";
import { navMenu } from "./page-sections/navbar/nav-menu";
import style from "./responsive.module.css";
interface Props {
  children: React.ReactNode;
  type?: "left" | "right" | "both" | "full-width";
}

interface Heading {
  id: string;
  text: string;
}

export default function DocsLayout({ children, type = "both" }: Props) {
  const [isDark, setIsDark] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isFixed, setIsFixed] = useState(false);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuState, setMenuState] = useState<"hidden" | "bottom" | "top">(
    "hidden"
  );

  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [openSubItemId, setOpenSubItemId] = useState<string | null>(null);

  const handleOpen = (href: string) => {
    setOpenItemId(openItemId === href ? null : href);
    // Close sub-items when opening a new main item
    if (openItemId !== href) {
      setOpenSubItemId(null);
    }
  };

  const handleSubOpen = (href: string) => {
    setOpenSubItemId(openSubItemId === href ? null : href);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0%",
      opacity: 1,
    },
  };

  // Animation variants for menu content
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Stagger animation for menu items
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {},
  };

  // STEP-WISE TOGGLE - Consider simplifying to just open/close
  const handleMenuToggle = () => {
    if (menuState === "hidden") {
      setMenuState("bottom");
    } else if (menuState === "bottom") {
      setMenuState("top");
    } else {
      setMenuState("hidden");
      // Reset menu states when closing
      setOpenItemId(null);
      setOpenSubItemId(null);
    }
  };

  // Outside click → hide everything
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if click is on hamburger button or its children
      const hamburgerButton = document.querySelector(".mobile_menu_btn");
      const isClickOnHamburger = hamburgerButton?.contains(target);

      // If clicked outside mobile menu AND not on hamburger button, close menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !isClickOnHamburger &&
        menuState !== "hidden"
      ) {
        setMenuState("hidden");
        // Reset menu states when closing
        setOpenItemId(null);
        setOpenSubItemId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuState]);

  // Effect to extract headings from the content

  useEffect(() => {
    if (!contentRef.current) return;
    const headingElements = contentRef.current.querySelectorAll("h4");

    const headingsArray = Array.from(headingElements)
      .filter(
        (heading) =>
          heading.id && heading.classList.contains("smooth-scroll-heading")
      )
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
      }));

    setHeadings(headingsArray);
  }, [children]);

  const handleScrollToHeading = (id: string) => {
    const headingElement = document.getElementById(id);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current;
      if (!content) return;

      if (content.getBoundingClientRect().top <= 0) setIsFixed(true);
      else setIsFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      data-spy="scroll"
      data-target="#navbar-example3"
      data-offset="86"
      data-scroll-animation="true"
      className={`doc ${menuState === "hidden" ? "" : "menu-is-opened"} ${
        isDark ? "body_dark" : ""
      }`}
    >
      <div className="body_wrapper">
        <Navbar navbarHide={style.navbar} />
        <div className="mobile_main_menu" id="sticky">
          <div className="container">
            <div className="mobile_menu_left">
              <motion.button
                onClick={handleMenuToggle}
                type="button"
                className="navbar-toggler mobile_menu_btn"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  className="menu_toggle"
                  animate={{ rotate: menuState !== "hidden" ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </motion.span>
              </motion.button>
              <Link className="sticky_logo" href="/">
                <img
                  src="/img/logo-w.png"
                  srcSet="/img/logo-w2x.png 2x"
                  alt="logo"
                />
                <img
                  src="/img/logo.png"
                  srcSet="/img/logo-2x.png 2x"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="mobile_menu_right">
              <Link className="nav_btn" href="">
                Free Trail
              </Link>
            </div>
          </div>
        </div>
        <div className="click_capture"></div>
        <AnimatePresence mode="wait">
          {menuState !== "hidden" && (
            <>
              {/* Backdrop overlay */}
              <motion.div
                className="mobile-menu-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{}}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 998,
                }}
                onClick={() => setMenuState("hidden")}
              />

              <motion.div
                ref={mobileMenuRef}
                className="side_menu menu-opened"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, ease: "easeOut" }}
                key="mobile-menu"
                style={{ zIndex: 999 }}
              >
                <motion.div
                  className="mobile_menu_header"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div onClick={handleMenuToggle} className="close_nav">
                    <i className="arrow_left"></i>
                    <i className="icon_close"></i>
                  </div>
                  <div className="mobile_logo">
                    <Link href="">
                      <img src="/img/logo.png" alt="logo" />
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  className="mobile_nav_wrapper"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {menuState === "top" && (
                    <motion.nav
                      className="mobile_nav_top"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <motion.ul
                        className="navbar-nav menu ml-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {navMenu.map((item) => (
                          <motion.li
                            key={item.href}
                            variants={menuItemVariants}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpen(item.href);
                            }}
                            className={`nav-item dropdown submenu ${
                              openItemId === item.href ? "active" : ""
                            }`}
                          >
                            <Link href={item.href} className="nav-link">
                              {item.title}
                            </Link>
                            {item?.items && item.items.length > 0 && (
                              <>
                                <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                <ul
                                  className="dropdown-menu"
                                  style={{
                                    display:
                                      openItemId === item.href
                                        ? "block"
                                        : "none",
                                  }}
                                >
                                  {item.items.map((subItem, index) => (
                                    <li
                                      className="nav-item"
                                      key={`${item.href}-${index}`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (
                                          subItem?.items &&
                                          subItem.items.length > 0
                                        ) {
                                          handleSubOpen(subItem.href);
                                        }
                                      }}
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="nav-link"
                                      >
                                        {subItem.title}
                                      </Link>
                                      {subItem?.items &&
                                        subItem.items.length > 0 && (
                                          <>
                                            <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                                            <ul
                                              className="dropdown-menu"
                                              style={{
                                                display:
                                                  openSubItemId === subItem.href
                                                    ? "block"
                                                    : "none",
                                              }}
                                            >
                                              {subItem.items.map(
                                                (subSubItem, subIndex) => (
                                                  <li
                                                    className="nav-item"
                                                    key={`${subItem.href}-${subIndex}`}
                                                  >
                                                    <Link
                                                      href={subSubItem.href}
                                                      className="nav-link"
                                                    >
                                                      {subSubItem.title}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </>
                                        )}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.nav>
                  )}
                  {menuState === "bottom" && (
                    <motion.div
                      className="mobile_nav_bottom"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Sidebar.Mobile />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <section className="breadcrumb_area">
          <img className="p_absolute bl_left" src="/img/v.svg" alt="" />
          <img
            className="p_absolute bl_right"
            src="/img/home_one/b_leaf.svg"
            alt=""
          />
          <img
            className="p_absolute star"
            src="/img/home_one/banner_bg.png"
            alt=""
          />
          <img
            className="p_absolute wave_shap_one"
            src="/img/blog-classic/shap_01.png"
            alt=""
          />
          <img
            className="p_absolute wave_shap_two"
            src="/img/blog-classic/shap_02.png"
            alt=""
          />
          <img
            className="p_absolute one wow fadeInRight"
            src="/img/home_one/b_man_two.png"
            alt=""
          />
          <img
            className="p_absolute two wow fadeInUp"
            data-wow-delay="0.2s"
            src="/img/home_one/flower.png"
            alt=""
          />
          <Search />
        </section>
        <section className="page_breadcrumb">
          <div className="container custom_container">
            <div className="row">
              <div className="col-sm-7">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="">Docs</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      KbDoc WordPress Theme
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-sm-5">
                <Link href="" className="date">
                  <i className="icon_clock_alt"></i>Updated on March 03, 2020
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={contentRef}
          className={`doc_documentation_area ${isFixed ? "body_fixed" : ""}`}
          id="sticky_doc"
          style={{ minHeight: "auto" }}
        >
          <div className="overlay_bg"></div>
          <div
            className={`${
              type === "full-width"
                ? "container-fluid pl-60 pr-60"
                : "container custom_container"
            }`}
          >
            <div className="row">
              <div className="col-lg-3 doc_mobile_menu display_none">
                <Sidebar />
              </div>
              <div
                className={`${
                  type == "left" ? "col-lg-9" : "col-lg-7"
                } col-md-8`}
              >
                {children}
              </div>

              {type !== "left" && (
                <div className="col-lg-2 col-md-4 doc_right_mobile_menu">
                  <div className="open_icon" id="right">
                    <i className="arrow_carrot-left"></i>
                    <i className="arrow_carrot-right"></i>
                  </div>
                  <div className="doc_rightsidebar scroll">
                    <OSSelector />
                    <FontSwitcher />
                    <ModeSwitcher isDark={isDark} toggleMode={toggleMode} />
                    <h6>On this page:</h6>
                    <nav
                      className="list-unstyled doc_menu"
                      id="navbar-example3"
                    >
                      {headings.map((heading, index) => (
                        <Link
                          key={index}
                          href={`#${heading.id}`}
                          className="nav-link"
                          onClick={() => handleScrollToHeading(heading.id)}
                        >
                          {heading.text}
                        </Link>
                      ))}
                      {/* <Link href="#documentation" className="nav-link active">
                        Documentation
                      </Link>
                      <Link href="#getting" className="nav-link">
                        Getting started
                      </Link>
                      <Link href="#version" className="nav-link">
                        Test KbDoc Version
                      </Link>
                      <Link href="#developer" className="nav-link">
                        Not a developer?
                      </Link>
                      <Link href="#help" className="nav-link">
                        We're here to help!
                      </Link> */}
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <footer className="simple_footer">
          <img
            className="leaf_right"
            src="/img/home_one/leaf_footter.png"
            alt=""
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <p>
                  © 2020 All Rights Reserved by <Link href="/">KbDoc</Link>
                </p>
              </div>
              <div className="col-sm-6 text-right">
                <ul className="list-unstyled f_social_icon">
                  <li>
                    <Link href="">
                      <i className="social_facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="social_twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="social_vimeo"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="social_linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div
        className="modal fade img_modal"
        id="exampleModal2"
        tabIndex={-2}
        role="dialog"
        aria-hidden="false"
      >
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <i className=" icon_close"></i>
        </button>
        <div className="modal-dialog help_form" role="document">
          <div className="modal-content">
            <div className="shortcode_title">
              <h1>How can we help?</h1>
              <p>
                A premium WordPress theme with integrated Knowledge Base,
                <br />
                providing 24/7 community based support.
              </p>
            </div>
            <form action="#" className="contact_form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="Message"
                  id="massage"
                  placeholder="Massage"
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit" className="btn action_btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
