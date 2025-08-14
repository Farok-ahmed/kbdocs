"use client"
import imgLarge from "@/assets/img/img-large.jpg";
import imgPointer1 from "@/assets/img/img-pointer1.jpg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ImageLightboxDocly2 from "./image-lightbox-docly2";
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
];
const ModalLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  return (
    <>
      <div className="col-lg-6 col-sm-6">
        <div className="pointing_img">
          <Link
            onClick={() => setIsOpen(true)}
            href="#"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <Image
              src={imgPointer1}
              alt=""
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <h6>
            How to edit <Link href="#">KbDoc</Link>
          </h6>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lightbox_modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              cursor: "pointer",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
              style={{ position: "relative", cursor: "default" }}
            >
              <Image
                className=""
                src={imgLarge}
                alt="large"
                style={{
                  width: "auto",
                  height: "auto",
                  maxHeight: "100vh",
                  maxWidth: "100%",
                  display: "block",
                }}
              />
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

              <button
                className="close"
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "-0%",
                  right: "-20%",
                  background: "white",
                  border: "none",

                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <i className=" icon_close"></i>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ImageLightboxDocly2 />
    </>
  );
};

export default ModalLightbox;
