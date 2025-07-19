import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sidebarItems } from "./menu";
import { ProgressMap, SidebarProps } from "./types";

const Sidebar: React.FC<SidebarProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [progressMap, setProgressMap] = useState<ProgressMap>({});

  useEffect(() => {
    const sections = sidebarItems.map((item) => item.id);

    const onScroll = () => {
      let currentActive: string | null = null;
      const newProgressMap: ProgressMap = {};

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const { top, height } = el.getBoundingClientRect();
        const started = top <= window.innerHeight && top + height >= 0;
        const finished = top * -1 >= height;

        // progress percentage
        const scrollY = Math.min(Math.max(-top, 0), height);
        const progress = Math.round((scrollY / height) * 100);
        newProgressMap[id] = progress;

        if (started && !finished) {
          currentActive = id;
        }
      });

      setProgressMap(newProgressMap);
      setActiveSection(currentActive);

      // Auto open submenu
      if (currentActive) {
        const activeIndex = sidebarItems.findIndex(
          (item) => item.id === currentActive
        );
        if (activeIndex !== -1 && sidebarItems[activeIndex].submenu) {
          setOpenIndex(activeIndex);
        } else {
          setOpenIndex(null);
        }
      } else {
        setOpenIndex(null);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //   useEffect(() => {
  //     const allSections = sidebarItems.flatMap((item) =>
  //       item.submenu ? [item.id, ...item.submenu.map((sub) => sub.id)] : [item.id]
  //     );

  //     const onScroll = () => {
  //       let currentActive: string | null = null;
  //       const newProgressMap: ProgressMap = {};

  //       allSections.forEach((id) => {
  //         const el = document.getElementById(id);
  //         if (!el) return;

  //         const { top, height } = el.getBoundingClientRect();
  //         const started = top <= window.innerHeight && top + height >= 0;
  //         const finished = top * -1 >= height;

  //         // Scroll progress calculate
  //         const scrollY = Math.min(Math.max(-top, 0), height);
  //         const progress = Math.round((scrollY / height) * 100);
  //         newProgressMap[id] = progress;

  //         if (started && !finished) {
  //           currentActive = id;
  //         }
  //       });

  //       setProgressMap(newProgressMap);
  //       setActiveSection(currentActive);

  //       if (currentActive) {
  //         const activeIndex = sidebarItems.findIndex(
  //           (item) =>
  //             item.id === currentActive ||
  //             item.submenu?.some((sub) => sub.id === currentActive)
  //         );
  //         if (activeIndex !== -1) {
  //           setOpenIndex(activeIndex);
  //         } else {
  //           setOpenIndex(null);
  //         }
  //       } else {
  //         setOpenIndex(null);
  //       }
  //     };

  //     window.addEventListener("scroll", onScroll);
  //     onScroll();

  //     return () => window.removeEventListener("scroll", onScroll);
  //   }, []);

  const toggleMenu = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <aside className="doc_left_sidebarlist">
      <h3 className="nav_title">Doc Navigation</h3>
      <div className="scroll mCustomScrollbar _mCS_1 mCS_no_scrollbar">
        <div
          id="mCSB_1"
          className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
          style={{ maxHeight: "none" }}
          tabIndex={0}
        >
          <div
            id="mCSB_1_container"
            className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
            style={{ position: "relative", top: 0, left: 0 }}
            dir="ltr"
          >
            <ul className="list-unstyled nav-sidebar doc-nav">
              {sidebarItems.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => toggleMenu(index)}
                  className={`nav-item ${
                    activeSection === item.id ? "active" : ""
                  }`}
                >
                  <span
                    className="docs-progress-bar"
                    style={{ width: `${progressMap[item.id] || 0}%` }}
                  />
                  <Link href={item.href} className="nav-link">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="mCS_img_loaded"
                    />
                    {item.label}
                  </Link>

                  {item.submenu && (
                    <>
                      <span className="icon">
                        {openIndex === index ? (
                          <i className="icon_minus-06" />
                        ) : (
                          <i className="icon_plus" />
                        )}
                      </span>

                      <AnimatePresence initial={false}>
                        {openIndex === index && (
                          <motion.ul
                            className="list-unstyled dropdown_nav"
                            initial={{
                              maxHeight: 0,
                              opacity: 0,
                              display: "none",
                            }}
                            animate={{
                              maxHeight: 500,
                              opacity: 1,
                              display: "block",
                            }}
                            exit={{ maxHeight: 0, opacity: 0, display: "none" }}
                            style={{ overflow: "hidden" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {item.submenu.map((subItem) => (
                              <li key={subItem.id} className="nav-item">
                                <Link href={subItem.href} className="nav-link">
                                  {subItem.label}
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
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
