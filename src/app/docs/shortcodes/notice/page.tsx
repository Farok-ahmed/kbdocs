import Link from "next/link";

const NoticePage = () => {
  return (
    <>
      <article className="shortcode_info rvfs-4" id="post" data-rvfs={4}>
        <div className="shortcode_title">
          <h1>Shortcodes</h1>
          <p>
            <span>Welcome to KbDoc !</span> Get familiar with the Stripe
            products and explore their features:
          </p>
        </div>
        <h4 className="s_title" id="alert">
          Messages Alerts
        </h4>
        <div className="alert media message_alert fade show" role="alert">
          <i className="icon_volume-low" />
          <div className="media-body">
            <h5>Your Message Title Here</h5>
            <p>
              Do one don't get shirty with me naff only a quid the full monty at
              public school burke Jeffrey smashing, blatant ruddy fanny around
              Charles.
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <i className="icon_close" />
            </button>
          </div>
        </div>
        <div
          className="alert media message_alert alert-danger fade show"
          role="alert"
        >
          <i className="icon_close_alt2" />
          <div className="media-body">
            <h5>Key Warnings</h5>
            <p>
              Do one don't get shirty with me naff only a quid the full monty at
              public school burke Jeffrey smashing, blatant ruddy fanny around
              Charles.
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <i className="icon_close" />
            </button>
          </div>
        </div>
        <div
          className="alert media message_alert alert-success fade show"
          role="alert"
        >
          <i className=" icon_check_alt2" />
          <div className="media-body">
            <h5>Packaged with useful shortcodes</h5>
            <p>
              Do one don't get shirty with me naff only a quid the full monty at
              public school burke Jeffrey smashing, blatant ruddy fanny around
              Charles.
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <i className="icon_close" />
            </button>
          </div>
        </div>
        <div
          className="alert media message_alert alert-warning fade show"
          role="alert"
        >
          <i className="icon_error-circle_alt" />
          <div className="media-body">
            <h5>Your Message Title Here</h5>
            <p>
              Do one don't get shirty with me naff only a quid the full monty at
              public school burke Jeffrey smashing, blatant ruddy fanny around
              Charles.
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <i className="icon_close" />
            </button>
          </div>
        </div>
        <div
          className="alert media message_alert alert-info fade show"
          role="alert"
        >
          <i className="icon_info_alt" />
          <div className="media-body">
            <h5>Information Message</h5>
            <p>
              Do one don't get shirty with me naff only a quid the full monty at
              public school burke Jeffrey smashing, blatant ruddy fanny around
              Charles.
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <i className="icon_close" />
            </button>
          </div>
        </div>
        <h4 className="s_title" id="notice">
          Notices
        </h4>
        <blockquote className="media notice notice-success">
          <i className="icon_menu-square_alt2" />
          <div className="media-body">
            <h5>Note</h5>
            <p>
              <span>Easy peasy</span> car boot hunky-dory brolly blow off{" "}
              <span>down the pub</span> show off show off pick your nose and
              blow off matie <span>boy</span> cobblers spiffing, bleeder the
              full monty excuse my <strong>French</strong> say bugger cack
              barney.
            </p>
          </div>
        </blockquote>
        <blockquote className="media notice notice-warning">
          <i className="icon_ribbon_alt" />
          <div className="media-body">
            <p>
              <strong>Admins:</strong> can choose to require users to enter
              their details by enabling the checkbox Require Name and Email
              address beside User Details option.
            </p>
            <p>
              <strong>This will:</strong> automatically register users to your
              site. User has to enter his/her Name and E-Mail in the following
              fields
            </p>
          </div>
        </blockquote>
        <blockquote className="media notice notice-danger">
          <i className="icon_ribbon_alt" />
          <div className="media-body">
            <p>
              To do this, simple navigate to{" "}
              <strong>
                wp-dashboard-&gt;User Frontend-&gt;Settings. From Settings,
              </strong>{" "}
              open the <strong>E-Mails</strong> page. The first 2 fields are all
              that you need to configure the email notification for guest users.
            </p>
          </div>
        </blockquote>
        <h4 className="s_title" id="explanation">
          Explanations
        </h4>
        <p className="explanation expn-left">
          I assumed I could start "recording" then click around different areas
          of the site and watch that unused number go down as different pages
          with different HTML are rendered, but alas, when the page refreshes,
          so does the Coverage tab. It's not very useful in getting?
        </p>
        <footer>
          <div className="border_bottom" />
          <div className="row feedback_link">
            <div className="col-lg-6">
              <h6>
                <i className="icon_mail_alt" />
                Still stuck?{" "}
                <Link href="#" data-toggle="modal" data-target="#exampleModal3">
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
        </footer>
      </article>
    </>
  );
};

export default NoticePage;
