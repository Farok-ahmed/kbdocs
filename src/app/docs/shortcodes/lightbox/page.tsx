"use client";

import Link from "next/link";
import { useState } from "react";
import ImageLightbox from "./.components/image-lightbox";
import ModalLightbox from "./.components/modal-lightbox";

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
        <ImageLightbox />
        <div className="image_pointer mt-5">
          <div className="shortcode_title">
            <h4 className="load-order-2" id="modal-lightbox">
              Modal Lightbox
              <Link
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
            <ModalLightbox />
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
