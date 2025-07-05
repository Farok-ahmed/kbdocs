import Accordion from "./_components/accordion";
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
        <Accordion />
        {/* <div className="toggle_shortcode">
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
        </div> */}

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
