"use client";

import logoW from "@/assets/img/logo-w.png";
import logo from "@/assets/img/logo.png";
import DocsDropDown from "@/components/page-sections/navbar/docs-dropdown";
import { navMenu } from "@/components/page-sections/navbar/nav-menu";
import NavToggler from "@/components/page-sections/navbar/nav-toggler";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Content from "./.components/content";

export default function OnePageClient() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const handleSubmenuClick = (index: string) => {
    setIsSubmenuOpen((prev) => (prev === index ? null : index));
  };

  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("body_dark");
    } else {
      document.body.classList.remove("body_dark");
    }
    return () => {
      document.body.classList.remove("body_dark");
    };
  }, [isDark]);

  useEffect(() => {
    document.body.classList.add("onepage-doc");
    return () => {
      document.body.classList.remove("onepage-doc");
    };
  }, []);

  return (
    <div className="body_wrapper sticky_menu">
      <nav
        className={`navbar navbar-expand-lg menu_one`}
        style={{ top: 0, zIndex: 100 }}
        id="stickyTwo"
      >
        <div className="container-fluid pl-60 pr-60">
          <Link className="navbar-brand" href="/">
            {isDark ? (
              <>
                <Image src={logoW} width={112} alt="Brand Logo" />
                <Image src={logoW} width={112} alt="Brand Logo" />
              </>
            ) : (
              <Image src={logo} width={112} alt="Brand Logo" />
            )}
          </Link>

          <NavToggler isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

          <div
            className={`navbar-collapse collapse  ${isExpanded ? "show" : ""}`}
            id="navbarSupportedContent"
            style={{ transition: "max-height 0.4s ease, padding 0.3s ease" }}
          >
            <ul className={`navbar-nav menu  ml-auto dk_menu`}>
              {navMenu.map((item) => {
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
                                  <Image src={subItem?.icon} alt="" style={{width:"auto", height:"auto"}} />
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
              })}
            </ul>

            <ul className="list-unstyled menu_social">
              <li className="search">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="get"
                  className="search_form"
                >
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for"
                  />
                  <button type="submit">
                    <i className="icon_search" />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Content onDark={handleDarkMode} isDark={isDark} />
    </div>
  );
}
