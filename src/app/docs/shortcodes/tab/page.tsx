"use client";
import CustomTabs from "./_components/CustomTabs";

const TabPage = () => {
  return (
    <>
      <div id="post" className="shortcode_info rvfs-4" data-rvfs={4}>
        <div className="shortcode_title">
          <h1>Shortcodes</h1>
          <p>
            <span>Welcome to KbDoc !</span> Get familiar with the Stripe
            products and explore their features:
          </p>
        </div>
        <CustomTabs />
        <div className="shortcode_title">
          <h4 className="s_title" id="tab2">
            Process Tab
          </h4>
          <p>
            Try the KbDoc API in seconds. Create your first customer, charge,
            and more by following the step below.
          </p>
        </div>
        <div className="process_tab_shortcode">
          <ul className="nav nav-tabs v_menu" id="myTabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link"
                id="card-tab"
                data-toggle="tab"
                href="#card"
                role="tab"
                aria-controls="card"
                aria-selected="false"
              >
                <span>1</span>Card
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="customer-tab"
                data-toggle="tab"
                href="#customer"
                role="tab"
                aria-controls="customer"
                aria-selected="false"
              >
                <span>2</span>Customer
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                id="charge-tab"
                data-toggle="tab"
                href="#charge"
                role="tab"
                aria-controls="charge"
                aria-selected="true"
              >
                <span>3</span>Charge
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="sub-tab"
                data-toggle="tab"
                href="#sub"
                role="tab"
                aria-controls="sub"
                aria-selected="false"
              >
                <span>4</span>Subscription
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="success-tab"
                data-toggle="tab"
                href="#success"
                role="tab"
                aria-controls="success"
                aria-selected="false"
              >
                <span>5</span>Success!
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContents">
            <div
              className="tab-pane fade"
              id="card"
              role="tabpanel"
              aria-labelledby="card-tab"
            >
              <p>
                Twit brilliant he legged it he nicked it amongst hotpot chinwag
                spend a penny lemon squeezy he lost his bottle porkies, Why it's
                your round happy days.
              </p>
              <div className="version">
                <div className="v_head">KbDoc run hello-world</div>
                <div className="v_middle">
                  <p>
                    Unable to find image{" "}
                    <span className="red">'hello-world:latest'</span> locally
                  </p>
                  <p>latest: Pulling from library/hello-world</p>
                  <p>
                    ca4f61b1923c: Pull <span className="green">complete</span>
                  </p>
                  <p>
                    Digest:
                    sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                  </p>
                  <p>Status: Downloaded newer image for hello-world:latest</p>
                </div>
                <div className="v_footer">
                  <p>
                    Hello from KbDoc!
                    <br /> This message shows that your installation appears to
                    be working correctly. <br />
                    ...
                  </p>
                </div>
              </div>
              <p>
                <span>Usage:</span> Click "Submit" to create a token.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="customer"
              role="tabpanel"
              aria-labelledby="customer-tab"
            >
              <p>
                Tristique omnis? Hymenaeos montes facilisi magnam facilisi ante
                voluptates odio nulla exercitationem tincidunt maecenas, dolores
                mauris praesent placeat
              </p>
              <div className="version">
                <p>
                  Vivamus vero netus tristique venenatis excepteur nisl
                  diamlorem nobis dolorem consequatur repellendus voluptatibus
                  sit voluptas similique taciti pariatur, veniam, consequatur.
                </p>
                <p>
                  Maecenas tempore facilis temporibus quas! Eius illo optio,
                  rhoncus expedita doloremque gravida, aptent, pariatur porro
                </p>
                <p>
                  Tristique omnis? Hymenaeos montes facilisi magnam facilisi
                  ante voluptates odio nulla exercitationem tincidunt maecenas,
                  dolores mauris praesent placeat
                </p>
              </div>
              <p>
                <span>Usage:</span> Click "Submit" to create a token.
              </p>
            </div>
            <div
              className="tab-pane fade active show"
              id="charge"
              role="tabpanel"
              aria-labelledby="charge-tab"
            >
              <p>
                Twit brilliant he legged it he nicked it amongst hotpot chinwag
                spend a penny lemon squeezy he lost his bottle porkies, Why it's
                your round happy days.
              </p>
              <div className="version">
                <div className="v_head">KbDoc run hello-world</div>
                <div className="v_middle">
                  <p>
                    Unable to find image{" "}
                    <span className="red">'hello-world:latest'</span> locally
                  </p>
                  <p>latest: Pulling from library/hello-world</p>
                  <p>
                    ca4f61b1923c: Pull <span className="green">complete</span>
                  </p>
                  <p>
                    Digest:
                    sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                  </p>
                  <p>Status: Downloaded newer image for hello-world:latest</p>
                </div>
                <div className="v_footer">
                  <p>
                    Hello from KbDoc!
                    <br /> This message shows that your installation appears to
                    be working correctly. <br />
                    ...
                  </p>
                </div>
              </div>
              <p>
                <span>Usage:</span> Click "Submit" to create a token.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="sub"
              role="tabpanel"
              aria-labelledby="sub-tab"
            >
              <p>
                Twit brilliant he legged it he nicked it amongst hotpot chinwag
                spend a penny lemon squeezy he lost his bottle porkies, Why it's
                your round happy days.
              </p>
              <div className="version">
                <div className="v_head">KbDoc run hello-world</div>
                <div className="v_middle">
                  <p>
                    Unable to find image{" "}
                    <span className="red">'hello-world:latest'</span> locally
                  </p>
                  <p>latest: Pulling from library/hello-world</p>
                  <p>
                    ca4f61b1923c: Pull <span className="green">complete</span>
                  </p>
                  <p>
                    Digest:
                    sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                  </p>
                  <p>Status: Downloaded newer image for hello-world:latest</p>
                </div>
                <div className="v_footer">
                  <p>
                    Hello from KbDoc!
                    <br /> This message shows that your installation appears to
                    be working correctly. <br />
                    ...
                  </p>
                </div>
              </div>
              <p>
                <span>Usage:</span> Click "Submit" to create a token.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="success"
              role="tabpanel"
              aria-labelledby="success-tab"
            >
              <p>
                Twit brilliant he legged it he nicked it amongst hotpot chinwag
                spend a penny lemon squeezy he lost his bottle porkies, Why it's
                your round happy days.
              </p>
              <div className="version">
                <div className="v_head">KbDoc run hello-world</div>
                <div className="v_middle">
                  <p>
                    Unable to find image{" "}
                    <span className="red">'hello-world:latest'</span> locally
                  </p>
                  <p>latest: Pulling from library/hello-world</p>
                  <p>
                    ca4f61b1923c: Pull <span className="green">complete</span>
                  </p>
                  <p>
                    Digest:
                    sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
                  </p>
                  <p>Status: Downloaded newer image for hello-world:latest</p>
                </div>
                <div className="v_footer">
                  <p>
                    Hello from KbDoc!
                    <br /> This message shows that your installation appears to
                    be working correctly. <br />
                    ...
                  </p>
                </div>
              </div>
              <p>
                <span>Usage:</span> Click "Submit" to create a token.
              </p>
            </div>
            <button className="btn btn-info btn-lg previous">
              <i className="arrow_carrot-left" />
            </button>
            <button className="btn btn-info btn-lg next">
              <i className="arrow_carrot-right" />
            </button>
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

export default TabPage;
