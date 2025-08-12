import imgPointer2 from "@/assets/img/img-pointer2.jpg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const LocalVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = (): void => setIsOpen(false);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const onClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      <div className="mt-5 code_item">
        <h4
          className="c_head load-order-2 smooth-scroll-heading"
          id="vimeo_video"
        >
          Local Video
          <Link
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#vimeo_video"
            style={{
              font: "1em / 1 anchorjs-icons",
              paddingLeft: "0.375em",
            }}
          />
        </h4>
        <p>
          While it's always better to host your videos on a video sharing
          website, but we provided a sample for you to include local videos in
          your pages.
        </p>
        <div className="code-preview" id="inline-popups">
          <Image src={imgPointer2} alt="" />
          <Link
            onClick={handleOpen}
            className="popup-youtube video_icon"
            href="#vid2"
          >
            <i className="arrow_triangle-right" />
          </Link>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="video-popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                background: "#fff",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                ref={popupRef}
                className="video-popup-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                style={{
                  background: "none",
                  borderRadius: 0,
                  boxShadow: "none",
                  padding: 0,
                  position: "relative",
                  maxWidth: 700,
                  width: "90vw",
                }}
              >
                <button
                  className="close"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 32,
                    background: "none",
                    border: "none",
                    color: "#333",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                  aria-label="Close video popup"
                >
                  &times;
                </button>
                <iframe
                  src="https://player.vimeo.com/video/76979871"
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    borderRadius: 12,
                    width: "100%",
                    height: 360,
                    display: "block",
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LocalVideo;
