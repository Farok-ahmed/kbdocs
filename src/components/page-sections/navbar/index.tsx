"use client";

import LogoW from "@/assets/img/logo-w.png";
import logo from "@/assets/img/logo.png";
import { pages } from "@/utils/pages";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import DocsDropDown from "./docs-dropdown";
import { navMenu } from "./nav-menu";
import NavToggler from "./nav-toggler";
import TopBar from "./top-bar";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<string | null>(null);
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

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`navbar-collapse collapse show `}
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
                            <DocsDropDown
                              isOpen={isSubmenuOpen === item.href}
                            />
                          ) : item.items && item.items.length > 0 ? (
                            // <ul
                            //   className={`dropdown-menu ${
                            //     isSubmenuOpen === item.href ? "show" : ""
                            //   } ${
                            //     isProductsDropdown ? "dropdown_menu_two" : ""
                            //   }`}
                            //   key={item.href}
                            // >
                            //   {item.items.map((subItem, index) => (
                            //     <li
                            //       className={`nav-item ${
                            //         pathname === subItem.href ? "active" : ""
                            //       }`}
                            //       key={index}
                            //     >
                            //       <Link
                            //         href={subItem.href}
                            //         className="nav-link"
                            //       >
                            //         {subItem.subTitle ? (
                            //           <>
                            //             <img src={subItem?.icon} alt="" />
                            //             <div className="text">
                            //               <h5>KbDoc</h5>
                            //               <p>Launch Simple Websites</p>
                            //             </div>
                            //           </>
                            //         ) : (
                            //           subItem.title
                            //         )}
                            //       </Link>
                            //     </li>
                            //   ))}
                            // </ul>
                            <AnimatePresence initial={false}>
                              {isSubmenuOpen === item.href && (
                                <motion.ul
                                  key={`submenu-${item.href}`}
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.3 }}
                                  className={`dropdown-menu show ${
                                    isProductsDropdown
                                      ? "dropdown_menu_two"
                                      : ""
                                  }`}
                                >
                                  {item.items.map((subItem, index) => (
                                    <li
                                      className={`nav-item ${
                                        pathname === subItem.href
                                          ? "active"
                                          : ""
                                      }`}
                                      key={index}
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="nav-link"
                                      >
                                        {subItem.subTitle ? (
                                          <>
                                            <img
                                              src={subItem.icon}
                                              alt={subItem.title || "icon"}
                                            />
                                            <div className="text">
                                              <h5>{subItem.title}</h5>
                                              <p>{subItem.subTitle}</p>
                                            </div>
                                          </>
                                        ) : (
                                          subItem.title
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
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
                  <i className="icon_profile"></i>Log In
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
