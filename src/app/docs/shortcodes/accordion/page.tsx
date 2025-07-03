import Toggle from "./_components/toggle";

const AccordionPage = () => {
  return (
    <>
      <div className="shortcode_info rvfs-4" id="post" data-rvfs={4}>
        <div className="shortcode_title">
          <h1>Shortcodes</h1>
          <p>
            <span>Welcome to KbDoc !</span> Get familiar with the Stripe
            products and explore their features:
          </p>
        </div>
        <Toggle />
        <div className="toggle_shortcode">
          <div className="shortcode_title">
            <h4 className="s_title load-order-2" id="toggle">
              Toggle
              <a
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#toggle"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              Switch from one effect, feature, or state to another by using a
              toggle.
            </p>
          </div>
          <a
            className="toggle_btn collapsed"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Super Professional
          </a>
          <div
            className="multi-collapse collapse"
            id="multiCollapseExample1"
            style={{}}
          >
            <div className="card card-body toggle_body">
              {" "}
              A short rod of wood or plastic sewn to one side of a coat or other
              garment, pushed through a hole or loop on the other side and
              twisted so as to act as a fastener.{" "}
            </div>
          </div>
          <a
            className="toggle_btn mt-1 collapsed"
            data-toggle="collapse"
            href="#multiCollapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Dashboard
          </a>
          <div
            className="multi-collapse collapse"
            id="multiCollapseExample2"
            style={{}}
          >
            <div className="card card-body toggle_body">
              He lost his bottle arse fanny around do one cheesed off crikey
              bevy mufty the full monty nancy boy cup of tea spend a penny,
              golly gosh what a plonker.
            </div>
          </div>
        </div>
        <div className="accordion_shortcode">
          <div className="shortcode_title">
            <h4 className="s_title load-order-2" id="accordions">
              Accordion
              <a
                className="anchorjs-link "
                aria-label="Anchor"
                data-anchorjs-icon=""
                href="#accordions"
                style={{
                  font: "1em / 1 anchorjs-icons",
                  paddingLeft: "0.375em",
                }}
              />
            </h4>
            <p>
              The accordion is a graphical control element comprising a
              vertically stacked list of items, such as labels or thumbnails.
            </p>
          </div>
          <div id="accordion">
            <div className="card doc_accordion">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Meaning of Accordion
                    <i className="icon_plus" />
                    <i className="icon_minus-06" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
                style={{}}
              >
                <div className="card-body toggle_body">
                  An accordion is similar in purpose to a tabbed interface, a
                  list of items where exactly one item is expanded into a panel
                  (i.e. list items are shortcuts to access separate panels).
                </div>
              </div>
            </div>
            <div className="card doc_accordion">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Online Marketing
                    <i className="icon_plus" />
                    <i className="icon_minus-06" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
                style={{}}
              >
                <div className="card-body toggle_body">
                  He lost his bottle arse fanny around do one cheesed off crikey
                  bevy mufty the full monty nancy boy cup of tea spend a penny,
                  golly gosh what a plonker.
                </div>
              </div>
            </div>
            <div className="card doc_accordion">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Amazing Support <i className="icon_plus" />
                    <i className="icon_minus-06" />
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse show"
                aria-labelledby="headingThree"
                data-parent="#accordion"
                style={{}}
              >
                <div className="card-body toggle_body">
                  He lost his bottle arse fanny around do one cheesed off crikey
                  bevy mufty the full monty nancy boy cup of tea spend a penny,
                  golly gosh what a plonker.
                </div>
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

export default AccordionPage;
