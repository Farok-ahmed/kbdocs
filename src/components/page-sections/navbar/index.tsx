"use client";

import LogoW from "@/assets/img/logo-w.png";
import logo from "@/assets/img/logo.png";
import { pages } from "@/utils/pages";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import DocsDropDown from "./docs-dropdown";
import { navMenu } from "./nav-menu";
import NavToggler from "./nav-toggler";
import TopBar from "./top-bar";

export default function Navbar({ navbarHide = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const isHelpDesk = pathname === pages.helpDesk;
  const isCoolKnowledgeBase = pathname === pages.coolKnowledgeBase;
  const isHomePage =
    pathname === pages.home || isHelpDesk || isCoolKnowledgeBase;
  const typographyPage = pathname === pages.typography;
  const isBlogSingle = pathname === pages.blogSingle;
  const homePage = pathname === pages.home;

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const isScrolled = useMemo(() => lastScrollTop > 5, [lastScrollTop]);
  const [isScrollDown, setIsScrollDown] = useState<boolean>();

  useEffect(() => {
    let lastScrollTopRef = lastScrollTop;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTopRef) {
        setIsScrollDown(true);
      } else if (currentScrollTop < lastScrollTopRef) {
        setIsScrollDown(false);
      } else {
        setIsScrollDown(undefined);
      }

      lastScrollTopRef = currentScrollTop;
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Remove dependency to prevent recreating listener

  // mobile version submenu open by item click
  const handleSubmenuClick = (index: string) => {
    setIsSubmenuOpen((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <TopBar isHelpDesk={isHelpDesk} />
      <nav
        className={`navbar navbar-expand-lg ${navbarHide}  ${
          homePage || isHelpDesk || isBlogSingle ? "menu_two" : "menu_one"
        } ${isScrolled ? "navbar_fixed" : ""}  ${
          isHelpDesk && lastScrollTop <= 40 ? "mt-40" : ""
        }`}
        style={{
          top: isScrollDown && lastScrollTop > 100 ? -100 : 0,
          zIndex: 100,
        }}
        id="sticky"
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            {homePage ||
            isHelpDesk ||
            isScrolled ||
            typographyPage ||
            isBlogSingle ? (
              <Image src={logo} width={112} alt="Brand Logo" />
            ) : (
              <Image src={LogoW} width={112} alt="Brand Logo" />
            )}
          </Link>
          <NavToggler isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

          <div
            className={`navbar-collapse collapse  ${isExpanded ? "show" : ""}`}
            id="navbarSupportedContent"
            style={{
              transition: "max-height 0.4s ease, padding 0.3s ease",
            }}
          >
            <ul
              className={`navbar-nav menu  ml-auto ${
                homePage || isHelpDesk || typographyPage || isBlogSingle
                  ? "dk_menu"
                  : ""
              }`}
            >
              {
                /* Home, Docs, Pages, Forum, Products, Blog */

                navMenu.map((item) => {
                  const isActive = pathname === item.href;
                  const isDocsDropdown = item.type === "docsDropdown";
                  const isProductsDropdown = item.isDropDown2;
                  return (
                    <li
                      className={`nav-item dropdown submenu ${
                        isDocsDropdown ? "mega_menu" : ""
                      } ${isActive ? "active" : ""}`}
                      key={item.href}
                      onClick={() => handleSubmenuClick(item.href)}
                    >
                      <Link
                        href={item.href}
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {item.title}
                      </Link>
                      <i
                        className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                        aria-hidden="true"
                        data-toggle="dropdown"
                      />

                      {isDocsDropdown ? (
                        <DocsDropDown isOpen={isSubmenuOpen === item.href} />
                      ) : item.items && item.items.length > 0 ? (
                        <ul
                          className={`dropdown-menu ${
                            isSubmenuOpen === item.href ? "show" : ""
                          } ${isProductsDropdown ? "dropdown_menu_two" : ""}`}
                          key={item.href}
                        >
                          {item.items.map((subItem, index) => (
                            <li
                              className={`nav-item ${
                                pathname === subItem.href ? "active" : ""
                              }`}
                              key={index}
                            >
                              <Link href={subItem.href} className="nav-link">
                                {subItem.subTitle ? (
                                  <>
                                    <img src={subItem?.icon} alt="" />
                                    <div className="text">
                                      <h5>KbDoc</h5>
                                      <p>Launch Simple Websites</p>
                                    </div>
                                  </>
                                ) : (
                                  subItem.title
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })
              }
            </ul>

            <Link
              className={`nav_btn ${isHelpDesk ? "round-btn" : ""}`}
              href="/login"
            >
              {homePage ? (
                <>
                  <i className="icon_profile"></i>Log In
                </>
              ) : (
                <>
                  {isHelpDesk && <i className="icon_headphones"></i>}
                  Free Trial
                </>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
