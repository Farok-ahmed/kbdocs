const LightBox = () => {
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
          <a href="img/lightbox-preview.jpg" className="img_popup">
            <i className="icon_plus" />
          </a>
        </div>
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
