import { useState } from "react";

import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
const ImageLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="lightbox_shortcode">
        <img src="/img/image-lightbox.jpg" alt="lightbox" />
        <Link onClick={() => setIsOpen(true)} href="#" className="img_popup">
          <i className="icon_plus" />
        </Link>
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
              <img
                src="/img/lightbox-preview.jpg"
                alt="lightbox"
                onClick={() => setIsOpen(false)}
                style={{
                  maxHeight: "90vh",
                  cursor: "zoom-out",
                  maxWidth: "100vw",
                  display: "block",
                }}
              />
              <button
                className="close"
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "-0%",
                  right: "-25%",
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
                <i className="icon_close_alt2" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageLightbox;
