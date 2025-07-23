import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ModalLightbox from "./../../../docs/shortcodes/lightbox/.components/modal-lightbox";

interface Hotspot {
  id: number;
  top: string;
  left: string;
  content: React.ReactNode;
}
const hotspotsData: Hotspot[] = [
  {
    id: 1,
    top: "20%",
    left: "30%",
    content: (
      <div className="img_pointing_content">
        <p>
          For editing menu navigation settings go to{" "}
          <span>
            Theme Options &gt; Header &gt; Top of Header &gt; Menu Element
          </span>
        </p>
        <p>
          For editing menus items go to <span>Appearance &gt; Menus</span>
        </p>
        <p>
          And for styling menus go to{" "}
          <span>
            Theme Options &gt; Header &gt; Top of Header &gt; Menu Styles of
            this Row
          </span>
        </p>
      </div>
    ),
  },
  {
    id: 2,
    top: "40%",
    left: "60%",
    content: (
      <div className="img_pointing_content">
        <p>
          For editing menu navigation settings go to{" "}
          <span>
            Theme Options &gt; Header &gt; Top of Header &gt; Menu Element
          </span>
        </p>
        <p>
          For editing menus items go to <span>Appearance &gt; Menus</span>
        </p>
        <p>
          And for styling menus go to{" "}
          <span>
            Theme Options &gt; Header &gt; Top of Header &gt; Menu Styles of
            this Row
          </span>
        </p>
      </div>
    ),
  },
  // Add more hotspots as needed
];
const ImagePointing = () => {
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  return (
    <div>
      <div className="shortcode_info" id="pointing">
        <h4
          className="s_title load-order-2 smooth-scroll-heading"
          id="pointing"
        >
          Image Hotspots
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#pointing"
            style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
          />
        </h4>
        <div className="pointing_img_container pointing_img_two">
          <img className="img-fluid" src="/img/home2-large.jpg" alt="large" />
          {hotspotsData.map((hotspot) => (
            <div
              key={hotspot.id}
              className={`img_pointing hotspot-${hotspot.id} tooltips tooltipstered`}
              style={{
                position: "absolute",
                top: hotspot.top,
                left: hotspot.left,
              }}
              onMouseEnter={() => setHoveredHotspot(hotspot.id)}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => setHoveredHotspot(null)}
            >
              <div className="dot" />
              <AnimatePresence>
                {hoveredHotspot === hotspot.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="tooltipster-base tooltipster-sidetip tooltipster-right tooltipster-grow tooltipster-show"
                    style={{
                      position: "absolute",
                      top: "30px",
                      left: "30px",
                      zIndex: 10,
                      width: "300px",
                    }}
                  >
                    <div className="tooltipster-box">
                      <div className="tooltipster-content">
                        {hotspot.content}
                      </div>
                    </div>
                    <div className="tooltipster-arrow" style={{ top: 28 }}>
                      <div className="tooltipster-arrow-uncropped">
                        <div className="tooltipster-arrow-border" />
                        <div className="tooltipster-arrow-background" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="image_pointer">
          <div className="shortcode_title">
            <h4 className="load-order-2 smooth-scroll-heading" id="demo">
              Demo Edit Guide
              <Link
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#demo"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              Via edit guide you can find where to edit elements, header,
              footer, etc.
            </p>
          </div>
          <div className="row">
            <ModalLightbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePointing;
