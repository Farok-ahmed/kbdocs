import FontSwitcher from "@/components/_components/font-switcher";
import ModeSwitcher from "@/components/_components/mode-switcher";
import OSSelector from "@/components/_components/os-selector";
import style from "@/components/responsive.module.css";
import { useState } from "react";
import ContentPage from "./.content/content-page";
import ShortcodePage from "./.shortcode/shortcode-page";
import TourPage from "./.tour/tour-page";
import ChangelogPage from "./changelog/changelog";
import Documentation from "./documentation";
import "./responsive.scss";
import Sidebar from "./sidebar";
import { ContentProps, FontSize } from "./types";
const sizes: FontSize[] = ["font-size-sm", "font-size-md", "font-size-xl"];
const defaultIndex: number = 1;

const Content: React.FC<ContentProps> = ({ onDark, isDark }) => {
  const [selectedSizeIndex, setSelectedSizeIndex] =
    useState<number>(defaultIndex);
  const [showRightSidebar, setShowRightSidebar] = useState<boolean>(false);

  // toggle right sidebar visibility
  const toggleRightSidebar = (): void => {
    setShowRightSidebar((prev) => !prev);
  };

  // Font size control handlers
  const handleFontSizeReset = (): void => {
    setSelectedSizeIndex(defaultIndex);
  };

  const handleFontSizeIncrease = (): void => {
    setSelectedSizeIndex((prevIndex: number) =>
      prevIndex < sizes.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleFontSizeDecrease = (): void => {
    setSelectedSizeIndex((prevIndex: number) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };
  return (
    <>
      <section
        style={{ paddingTop: "0px !important" }}
        className="doc_documentation_area onepage_doc_area body_fixed"
        id="sticky_doc"
      >
        <div className="overlay_bg" />
        <div className="container-fluid pl-60 pr-60">
          <div className="row doc-container">
            <div className="col-lg-2 doc_mobile_menu doc-sidebar display_none">
              <Sidebar />
            </div>
            <div
              className={`col-lg-8 col-md-8 ${style["main-parent"]} ${
                style[sizes[selectedSizeIndex]]
              }`}
            >
              <div
                className="documentation_info rvfs-4"
                id="post"
                data-rvfs={4}
              >
                {/*doc*/}
                <Documentation />
                {/*shortcode*/}
                <ShortcodePage />

                <TourPage />
                {/*typography*/}
                <ContentPage />
                {/*changelog*/}
                <ChangelogPage />
              </div>
            </div>
            <div
              className={`col-lg-2 col-md-4 doc_right_mobile_menu hide-mobile-right ${
                showRightSidebar ? "open" : ""
              }`}
            >
              <div
                className="open_icon"
                id="right"
                onClick={toggleRightSidebar}
              >
                <i className="arrow_carrot-left" />
                <i className="arrow_carrot-right" />
              </div>
              <div className="doc_rightsidebar">
                <ul className="list-unstyled doc_right_link">
                  <li>
                    <a href="#">
                      <i className=" icon_pencil" />
                      Edit this page
                    </a>
                  </li>
                </ul>
                <OSSelector />
                <FontSwitcher
                  onIncrease={handleFontSizeIncrease}
                  onDecrease={handleFontSizeDecrease}
                  onReset={handleFontSizeReset}
                />
                <ModeSwitcher toggleMode={onDark} isDark={isDark} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
