"use client";

import Link from "next/link";

const LayoutsPage = () => {
  return (
    <>
      <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
        <article className="documentation_body" id="documentation">
          <div className="shortcode_title">
            <h1>Getting Started</h1>
            <p>
              <span>Welcome to KbDoc !</span> Get familiar with the Stripe
              products and explore their features:
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img src="/img/side-nav/terminals.png" alt="" />
                </div>
                <div className="media-body">
                  <Link href="#">
                    <h5>Terminal</h5>
                  </Link>
                  <p>He lost his bottle bubble and squeak knackered.!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img src="/img/home_one/icon/android.png" alt="" />
                </div>
                <div className="media-body">
                  <Link href="#">
                    <h5>Getting Started</h5>
                  </Link>
                  <p>He lost his bottle bubble and squeak knackered.!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img src="/img/home_one/icon/smartphone.png" alt="" />
                </div>
                <div className="media-body">
                  <Link href="#">
                    <h5>Mobile App</h5>
                  </Link>
                  <p>He lost his bottle bubble and squeak knackered.!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img src="/img/home_one/icon/management.png" alt="" />
                </div>
                <div className="media-body">
                  <Link href="#">
                    <h5>Account Management</h5>
                  </Link>
                  <p>He lost his bottle bubble and squeak knackered.!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img src="/img/home_one/icon/newspaper.png" alt="" />
                </div>
                <div className="media-body">
                  <Link href="#">
                    <h5>Productivity</h5>
                  </Link>
                  <p>He lost his bottle bubble and squeak knackered.!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img src="/img/side-nav/issuin.png" alt="" />
                </div>
                <div className="media-body">
                  <Link href="#">
                    <h5>Issuing</h5>
                  </Link>
                  <p>He lost his bottle bubble and squeak knackered.!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border_bottom" />
        </article>
        <article className="get_started" id="getting">
          <h4 className="c_head load-order-2" id="introduction">
            Introduction
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#introduction"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            />
          </h4>
          <p>
            Owt to do with me chinwag get stuffed mate baking cakes blow off
            vagabond knackered faff about boot a load of old tosh{" "}
            <Link href="#">Richard Charles</Link>, cor blimey guvnor cheers
            fantastic butty{" "}
            <Link href="#">A bit of how's your father down</Link> the pub
            plastered bugger <Link href="#">all mate such a fibber</Link> lemon
            squeezy.
          </p>
          <Link href="#"></Link>
          <h4
            className="c_head load-order-2"
            id="add-payments-to-your-platform"
          >
            <Link href="#">Add payments to your platform</Link>
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#add-payments-to-your-platform"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            />
          </h4>
          <p>
            Don't get shirty with me what a plonker on your bike mate bugger all
            mate chip shop bits and bobs smashing mush bugger cup of char, in my
            flat my lady naff bubble and squeak tosser pukka barmy bog the bee's
            knees, elizabeth dropped a clanger cheesed.
          </p>
          <h4 className="c_head">Extend Stripe's offerings</h4>
          <p>
            Naff wellies such a fibber up the duff some dodgy chav sloshed blow
            off golly gosh <Link href="#">jolly good hotpot gutted mate</Link>,
            me old mucker cras mush.
          </p>
          <div className="link">
            <p>
              Spiffing good time blimey smashing bevvy hunky-dory cor blimey
              guvnor elizabeth bite your arm off, bamboozled A bit of how's your
              father it's all gone to pot bodge.
            </p>
          </div>
        </article>
        <div className="border_bottom" />
        <article className="test_version" id="version">
          <h4 className="c_head">Test KbDoc Version</h4>
          <p>
            Try the KbDoc API in seconds. Create your first customer, charge,
            and more by following the steps below.
          </p>
          <ul className="nav nav-tabs v_menu" id="myTab" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link active"
                id="card-tab"
                data-toggle="tab"
                href="#card"
                role="tab"
                aria-controls="card"
                aria-selected="true"
              >
                <span>1</span>Card
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="customer-tab"
                data-toggle="tab"
                href="#customer"
                role="tab"
                aria-controls="customer"
                aria-selected="false"
              >
                <span>2</span>Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="charge-tab"
                data-toggle="tab"
                href="#charge"
                role="tab"
                aria-controls="charge"
                aria-selected="false"
              >
                <span>3</span>Charge
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="sub-tab"
                data-toggle="tab"
                href="#sub"
                role="tab"
                aria-controls="sub"
                aria-selected="false"
              >
                <span>4</span>Subscription
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="success-tab"
                data-toggle="tab"
                href="#success"
                role="tab"
                aria-controls="success"
                aria-selected="false"
              >
                <span>5</span>Success!
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
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
          </div>
        </article>
        <div className="border_bottom" />
        <article className="developer" id="developer">
          <h4 className="c_head">Features</h4>
          <ul className="list-unstyled tag_list">
            <li>
              <i className="icon_document_alt" />
              HTML5 &amp; CSS3
            </li>
            <li>
              <i className="icon_document_alt" />
              Responsive layout (desktops, tablets, mobile devices)
            </li>
            <li>
              <i className="icon_document_alt" />
              Built with Bootstrap 4.3
            </li>
            <li>
              <i className="icon_document_alt" />
              Well structured code
            </li>
            <li>
              <i className="icon_document_alt" />
              About
            </li>
            <li>
              <i className="icon_document_alt" />
              Hinted Typography
            </li>
          </ul>
        </article>
        <div className="border_bottom" />
        <article className="code_structure">
          <h4 className="c_head load-order-2" id="code-structure">
            Code Structure
            <Link
              className="anchorjs-link "
              aria-label="Anchor"
              data-anchorjs-icon=""
              href="#code-structure"
              style={{ font: "1em / 1 anchorjs-icons", paddingLeft: "0.375em" }}
            />
          </h4>
          <p>HTML, css and javascript files included.</p>
          <div className="row">
            <div className="col-lg-6">
              <div className="code-toolbar">
                <pre className="snippet language-html">
                  <code className=" language-html" data-lang="css">
                    doc<span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>assets/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>animation/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>bootstrap/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>elagent-icon/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>magnify-pop/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>mcustomscrollbar/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>niceselectpicker/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>prism/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>└──
                    <span className="token space"> </span>slick/
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>blog-list.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>about.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>accordion.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>alerts.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>blog-grid.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>blog-list.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>blog-single.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>blog-grid-two.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>changelog.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>code.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>both-sidebar.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>doclist.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>images-pointing.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>index.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>index.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>lightbox.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>layout-sidebar.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>layout-minimal.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>layout-sidebar.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>notice.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>tables.html
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>typography.html
                    <span className="token lf">{"\n"}</span>└──
                    <span className="token space"> </span>video.html
                  </code>
                </pre>
                <div className="toolbar">
                  <div className="toolbar-item">
                    <span>HTML</span>
                  </div>
                  <div className="toolbar-item">
                    <button>Copy</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="code-toolbar">
                <pre className="snippet language-html">
                  <code className=" language-html" data-lang="css">
                    assets<span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>css/
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>bootstrap.css
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>bootstrap.min.css
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>
                    jquery.mCustomScrollbar.css
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>magnific-popup.css
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>├──
                    <span className="token space"> </span>magnific-popup.min.css
                    <span className="token lf">{"\n"}</span>│
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>└──
                    <span className="token space"> </span>style.css
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>doc/
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>fontawesome/
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>fonts/
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>img/
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>js/
                    <span className="token lf">{"\n"}</span>├──
                    <span className="token space"> </span>slick/
                    <span className="token lf">{"\n"}</span>└──
                    <span className="token space"> </span>elagent-icon
                  </code>
                </pre>
                <div className="toolbar">
                  <div className="toolbar-item">
                    <span>HTML</span>
                  </div>
                  <div className="toolbar-item">
                    <button>Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="help_text" id="help">
          <h4 className="c_head">We're here to help!</h4>
          <div className="help_info">
            <div className="help_item">
              <Link href="#">
                <h4>Support</h4>
              </Link>
              <p>Car boot absolutely bladder the full monty ruddy.</p>
            </div>
            <div className="help_item">
              <Link href="#">
                <h4>
                  Samples <i className="arrow_carrot-right" />
                </h4>
              </Link>
              <p>Car boot absolutely bladder the full monty ruddy.</p>
            </div>
            <div className="help_item">
              <Link href="#">
                <h4>API Discussion Board</h4>
              </Link>
              <p>Car boot absolutely bladder the full monty ruddy.</p>
            </div>
          </div>
          <div className="border_bottom" />
          <div className="row question_box">
            <div className="col-lg-6">
              <div className="question_text">
                <h4>Questions?</h4>
                <p>
                  Cheeky that bubble and squeak fanny around bleeder hunky-dory
                  daft <Link href="#">bonnet brolly victoria</Link> sponge show
                  off show off pick your nose and blow off{" "}
                  <Link href="#">my good sir, cobblers</Link> dropped.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="question_text question_text_two">
                <h4>Sign up for the Developer Digest</h4>
                <p>
                  Share your email so KbDoc can send you updates about the API
                  and developer platform.
                </p>
                <form
                  className="mailchimp signup_form"
                  method="post"
                  onSubmit={(e) => e.preventDefault()}
                  noValidate={true}
                >
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control memail"
                      placeholder="Email"
                    />
                    <div className="input-group-append">
                      <button type="submit">Sign Up</button>
                    </div>
                  </div>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  />
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  />
                </form>
                <p>
                  You can unsubscribe at any time. Read our privacy policy{" "}
                  <Link href="#">here</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="border_bottom" />
          <div className="row feedback_link">
            <div className="col-lg-6">
              <h6>
                <i className="icon_mail_alt" />
                Still stuck?{" "}
                <Link href="#" data-toggle="modal" data-target="#exampleModal2">
                  How can we help?
                </Link>
              </h6>
            </div>
            <div className="col-lg-6">
              <p>
                Was this page helpful?{" "}
                <Link href="#" className="h_btn">
                  Yes
                </Link>
                <Link href="#" className="h_btn">
                  No
                </Link>
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default LayoutsPage;
