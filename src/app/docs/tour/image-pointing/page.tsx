const ImagePointingPage = () => {
  return (
    <>
      <article className="shortcode_info">
        <div className="shortcode_title">
          <h1>Image Hotspots</h1>
          <p>
            <span>Welcome to KbDoc !</span> Get familiar with the Stripe
            products and explore their features:
          </p>
        </div>
        <h4 className="s_title load-order-2" id="pointing">
          Image Hotspots
          <a
            className="anchorjs-link "
            aria-label="Anchor"
            data-anchorjs-icon=""
            href="#pointing"
            style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
          />
        </h4>
        <div className="pointing_img_container pointing_img_two">
          <img className="img-fluid" src="/img/home2-large.jpg" alt="large" />
          <div
            className="img_pointing one tooltips tooltipstered"
            data-tooltip-content="#img_tooltipone"
          >
            <div className="dot" />
          </div>
          <div
            className="img_pointing two tooltips tooltipstered"
            data-tooltip-content="#img_tooltiptwo"
          >
            <div className="dot" />
          </div>
          <div
            className="img_pointing three tooltips tooltipstered"
            data-tooltip-content="#img_tooltipthree"
          >
            <div className="dot" />
          </div>
          <div
            className="img_pointing four tooltips tooltipstered"
            data-tooltip-content="#img_tooltipfour"
          >
            <div className="dot" />
          </div>
        </div>
        <div className="image_pointer">
          <div className="shortcode_title">
            <h4 className="load-order-2" id="demo">
              Demo Edit Guide
              <a
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
      </article>
    </>
  );
};

export default ImagePointingPage;
