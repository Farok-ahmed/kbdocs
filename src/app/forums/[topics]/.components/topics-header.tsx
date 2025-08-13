"use client";
import fl1 from "@/assets/img/home_support/fl1.png";
import fl2 from "@/assets/img/home_support/fl2.png";
import fl3 from "@/assets/img/home_support/fl3.png";
import fl4 from "@/assets/img/home_support/fl4.png";
import fl5 from "@/assets/img/home_support/fl5.png";
import fl6 from "@/assets/img/home_support/fl6.png";
import fl7 from "@/assets/img/home_support/fl7.png";
import fl8 from "@/assets/img/home_support/fl8.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TopicsHeader = () => {
  const [openMenu, setOpenMenu] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = (menuId: string) => {
    // If the clicked menu is already open, close it. Otherwise, open it.
    setOpenMenu(openMenu === menuId ? "" : menuId);
  };

  // Effect to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        // If the click is outside the dropdown, close the open menu
        setOpenMenu("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="post-header">
        <div className="support-info">
          <ul className="support-total-info">
            <li className="open-ticket">
              <i className="icon_info_alt"></i>576 Open
            </li>
            <li className="close-ticket">
              <i className="icon_check"></i>
              <Link href="#">2,974 Closed</Link>
            </li>
          </ul>
        </div>

        <div className="support-category-menus" ref={dropdownRef}>
          <ul className="category-menu">
            {/* Author Dropdown */}
            <li>
              <div className="dropdown">
                <button
                  onClick={() => handleToggle("author")}
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                >
                  Author
                </button>
                {openMenu === "author" && (
                  <div
                    className="dropdown-menu show"
                    // aria-labelledby="dropdownMenuAuthor"
                  >
                    <h3 className="title">Filter by author</h3>

                    <form action="#" className="cate-search-form">
                      <input type="text" placeholder="Filter users" />
                    </form>

                    <div className="all-users">
                      <Link
                        className="dropdown-item"
                        href="#0"
                        data-rel="richard"
                      >
                        <Image src={fl1} alt="user" />
                        Richard Tea
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="#0"
                        data-rel="druid"
                      >
                        <Image src={fl2} alt="user" />
                        Druid Wensleydale
                      </Link>
                      <Link className="dropdown-item" href="#0" data-rel="weir">
                        <Image src={fl3} alt="user" />
                        Weir Doee
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="#0"
                        data-rel="giles"
                      >
                        <Image src={fl4} alt="user" />
                        Giles Posture
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="#0"
                        data-rel="theodore"
                      >
                        <Image src={fl5} alt="user" />
                        Theodore Handle
                      </Link>
                      <Link className="dropdown-item" href="#0" data-rel="mann">
                        <Image src={fl6} alt="user" />
                        Guy Mann
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="#0"
                        data-rel="dylan"
                      >
                        <Image src={fl7} alt="user" />
                        Dylan Meringue
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="#0"
                        data-rel="fletch"
                      >
                        <Image src={fl8} alt="user" />
                        Fletch Skinner
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* Label Dropdown */}
            <li>
              <div className="dropdown">
                <button
                  onClick={() => handleToggle("label")}
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                >
                  Label
                </button>
                {openMenu === "label" && (
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuLabel"
                  >
                    <h3 className="title">Filter by label</h3>

                    <form action="#" className="cate-search-form">
                      <input type="text" placeholder="Filter users" />
                    </form>

                    <div className="all-users">
                      <Link
                        className="dropdown-item"
                        data-rel="kbDoc"
                        href="#0"
                      >
                        <span className="color-purple"></span>
                        KbDoc
                      </Link>
                      <Link
                        className="dropdown-item"
                        data-rel="improvement"
                        href="#0"
                      >
                        <span className="color-yellow"></span>
                        Improvement !
                      </Link>
                      <Link className="dropdown-item" data-rel="css" href="#0">
                        <span className="color-ass"></span>
                        CSS
                      </Link>
                      <Link
                        className="dropdown-item"
                        href="#0"
                        data-rel="feature"
                      >
                        <span className="color-green"></span>
                        Feature
                      </Link>
                      <Link
                        className="dropdown-item"
                        data-rel="spider"
                        href="#0"
                      >
                        <span className="color-orange"></span>
                        Spider theme
                      </Link>
                      <Link className="dropdown-item" href="#0" data-rel="open">
                        <span className="color-theme"></span>
                        Open
                      </Link>
                      <Link className="dropdown-item" data-rel="bug" href="#0">
                        <span className="color-pink"></span>
                        Bug !
                      </Link>
                      <Link className="dropdown-item" data-rel="doc" href="#0">
                        <span className="color-light-green"></span>
                        Docs
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* Assignee Dropdown */}
            <li>
              <div className="dropdown">
                <button
                  onClick={() => handleToggle("assignee")}
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                >
                  Assignee
                </button>
                {openMenu === "assignee" && (
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuAssignee"
                  >
                    <h3 className="title">Filter by author</h3>

                    <form action="#" className="cate-search-form">
                      <input type="text" placeholder="Filter users" />
                    </form>

                    <div className="all-users">
                      <Link className="dropdown-item" href="#">
                        <Image src={fl1} alt="user" />
                        Richard Tea
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <Image src={fl2} alt="user" />
                        Druid Wensleydale
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <Image src={fl3} alt="user" />
                        Weir Doee
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <Image src={fl4} alt="user" />
                        Giles Posture
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <Image src={fl5} alt="user" />
                        Theodore Handle
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <Image src={fl6} alt="user" />
                        Guy Mann
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <Image src={fl7} alt="user" />
                        Dylan Meringue
                      </Link>
                      <Link className="dropdown-item" href="#">
                        <Image src={fl8} alt="user" />
                        Fletch Skinner
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>

            {/* Sort Dropdown */}
            <li>
              <div className="dropdown">
                <button
                  onClick={() => handleToggle("sort")}
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                >
                  Sort
                </button>
                {openMenu === "sort" && (
                  <div
                    className="dropdown-menu show"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <h3 className="title">Sort by</h3>
                    <div className="short-by">
                      <Link className="dropdown-item active-short" href="#0">
                        Newest
                      </Link>
                      <Link className="dropdown-item" href="#0">
                        Oldest
                      </Link>
                      <Link className="dropdown-item" href="#0">
                        Most commented
                      </Link>
                      <Link className="dropdown-item" href="#0">
                        Least commented
                      </Link>
                      <Link className="dropdown-item" href="#0">
                        Recently updated
                      </Link>
                      <Link className="dropdown-item" href="#0">
                        Least recently updated
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopicsHeader;
