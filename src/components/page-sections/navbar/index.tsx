"use client";

import LogoW from "@/assets/img/logo-w.png";
import logo from "@/assets/img/logo.png";
import { pages } from "@/utils/pages";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import DocsDropDown from "./docs-dropdown";
import NavToggler from "./nav-toggler";
import TopBar from "./top-bar";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const isHelpDesk = pathname === pages.helpDesk;
  const isCoolKnowledgeBase = pathname === pages.coolKnowledgeBase;
  const isHomePage =
    pathname === pages.home || isHelpDesk || isCoolKnowledgeBase;

  const homePage = pathname === pages.home;

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const isScrolled = useMemo(() => lastScrollTop > 5, [lastScrollTop]);
  const [isScrollDown, setIsScrollDown] = useState<boolean>();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrollDown(true);
      } else if (currentScrollTop < lastScrollTop) {
        setIsScrollDown(false);
      } else {
        setIsScrollDown(undefined);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const currentScrollTop =
  //         window.pageYOffset || document.documentElement.scrollTop;
  //     useEffect(() => {
  //         const handleScroll = () => {
  //             const currentScrollTop =
  //                 window.pageYOffset || document.documentElement.scrollTop;

  //       if (currentScrollTop > lastScrollTop) setIsScrollDown(true);
  //       else if (currentScrollTop < lastScrollTop) setIsScrollDown(false);
  //       else setIsScrollDown(undefined);

  //       setLastScrollTop(currentScrollTop);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [lastScrollTop]);

  return (
    <>
      <TopBar isHelpDesk={isHelpDesk} />
      <nav
        className={`navbar navbar-expand-lg ${
          homePage ? "menu_two" : "menu_one"
        } ${isScrolled ? "navbar_fixed" : ""}  ${
          isHelpDesk && lastScrollTop <= 40 ? "mt-40" : ""
        }`}
        style={{ top: isScrollDown && lastScrollTop > 100 ? -100 : 0 }}
        id="sticky"
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            {homePage || isHelpDesk || isScrolled ? (
              <Image src={logo} width={112} alt="Brand Logo" />
            ) : (
              <Image src={LogoW} width={112} alt="Brand Logo" />
            )}
          </Link>
          <NavToggler isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

          <div
            className={`navbar-collapse collapse ${isExpanded ? "show" : ""}`}
            id="navbarSupportedContent"
            style={{
              transition: "max-height 0.4s ease, padding 0.3s ease",
            }}
          >
            <ul
              className={`navbar-nav menu  ml-auto ${
                homePage || isHelpDesk ? "dk_menu" : ""
              }`}
            >
              <li
                className={`nav-item dropdown submenu ${
                  isHomePage ? "active" : ""
                }`}
              >
                <Link
                  href="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup
                  aria-expanded={false}
                >
                  Home
                </Link>
                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                  aria-hidden="true"
                  data-toggle="dropdown"
                />
                <ul className="dropdown-menu">
                  <li
                    className={`nav-item ${
                      pathname === pages.lightKnowledgeBase ? "active" : ""
                    }`}
                  >
                    <Link href="/" className="nav-link">
                      Light KnowledgeBase
                    </Link>
                  </li>
                  <li className={`nav-item ${isHelpDesk ? "active" : ""}`}>
                    <Link href="/help-desk" className="nav-link">
                      Help Desk
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isCoolKnowledgeBase ? "active" : ""
                    }`}
                  >
                    <Link href="/cool-knowledge-base" className="nav-link">
                      Cool KnowledgeBase
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu mega_menu tab-demo">
                <Link
                  href=""
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Docs
                </Link>
                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                  aria-hidden="true"
                  data-toggle="dropdown"
                ></i>
                <DocsDropDown />
              </li>
              <li className="nav-item dropdown submenu">
                <Link
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                  aria-hidden="false"
                  data-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/login" className="nav-link">
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/typography" className="nav-link">
                      Typography
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/404" className="nav-link">
                      404 Page Not Found
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/forums"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Forum
                </Link>
                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                  aria-hidden="false"
                  data-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/forums" className="nav-link">
                      Forums Root
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/forum-topics" className="nav-link">
                      Forum Topics
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/forum-single" className="nav-link">
                      Forum Single
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Products
                </Link>
                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                  aria-hidden="false"
                  data-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu dropdown_menu_two">
                  <li className="nav-item">
                    <Link href="/doc-archive" className="nav-link">
                      <img src="/img/tick.png" alt="" />
                      <div className="text">
                        <h5>KbDoc</h5>
                        <p>Launch Simple Websites</p>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/docs" className="nav-link">
                      <img src="/img/sheet.png" alt="" />
                      <div className="text">
                        <h5>docall</h5>
                        <p>Digital Assets Subscription</p>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      <img src="/img/shopping-bag.png" alt="" />
                      <div className="text">
                        <h5>Docenvato</h5>
                        <p>Tutorials & Courses</p>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      <img src="/img/gear.png" alt="" />
                      <div className="text">
                        <h5>Tools</h5>
                        <p>Hire a Freelancer</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown submenu">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                <i
                  className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                  aria-hidden="false"
                  data-toggle="dropdown"
                ></i>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link href="/blog-grid" className="nav-link">
                      Blog Grid
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog-grid-two" className="nav-link">
                      Blog Grid Two
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog-list" className="nav-link">
                      Blog List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog-single" className="nav-link">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link
              className={`nav_btn ${isHelpDesk ? "round-btn" : ""}`}
              href="/login"
            >
              <i className="icon_profile"></i>Log In
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
