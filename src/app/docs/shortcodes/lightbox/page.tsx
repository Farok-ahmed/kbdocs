"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const LightBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="shortcode_info">
        <div id="lightbox" className="shortcode_title">
          <h2>Image Lightbox</h2>
          <p>
            A Dashboard is a convenient way to get an overview of the the
            current status of your tasks and monitorthe progress of your team.
          </p>
        </div>
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
                  src="/img/image-lightbox.jpg"
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
                    top: "-20%",
                    right: "-40%",
                    background: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  <i className="icon_close_alt2" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="image_pointer mt-5">
          <div className="shortcode_title">
            <h4 className="load-order-2" id="modal-lightbox">
              Modal Lightbox
              <a
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#modal-lightbox"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              Demo Edit Guide via edit guide you can find where to edit
              elements, header, footer, etc.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="pointing_img">
                <a href="#" data-toggle="modal" data-target="#exampleModal">
                  <img src="/img/img-pointer1.jpg" alt="" />
                </a>
                <h6>
                  How to edit <a href="#">KbDoc</a>
                </h6>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="pointing_img">
                <a href="#" data-toggle="modal" data-target="#exampleModal2">
                  <img src="/img/img-pointer2.jpg" alt="" />
                </a>
                <h6>
                  How to edit <a href="#">Docly2</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="border_bottom" />
          <div className="row feedback_link">
            <div className="col-lg-6">
              <h6>
                <i className="icon_mail_alt" />
                Still stuck?{" "}
                <a href="#" data-toggle="modal" data-target="#exampleModal3">
                  How can we help?
                </a>
              </h6>
            </div>
            <div className="col-lg-6">
              <p>
                Was this page helpful?{" "}
                <a href="#" className="h_btn">
                  Yes
                </a>
                <a href="#" className="h_btn">
                  No
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LightBox;
