const ForumSingleSidebar = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="forum_sidebar">
          <div className="widget status_widget">
            <h4 className="c_head">Information</h4>
            <p className="status">
              Support is <span className="offline">Offline</span>
            </p>
            <div className="open-hours">
              <h4 className="title-sm">Our office hours</h4>
              <p>Monday - Friday / 10am - 6pm (UTC +4) NewYork</p>
              <ul className="current-time list-unstyled">
                <li>
                  <h4 className="title-sm">Your time</h4>
                  <p>10:30:15 PM</p>
                </li>
                <li>
                  <h4 className="title-sm">Your time</h4>
                  <p>10:30:15 PM</p>
                </li>
              </ul>
            </div>
            {/* /.open-hours */}
          </div>
          <div className="widget usefull_links_widget">
            <h4 className="c_head">Usefull Links</h4>
            <ul className="list-unstyled usefull-links">
              <li>
                <i className="icon_lightbulb_alt" />
                <a href="#">FAQs</a>
              </li>
              <li>
                <i className="icon_clock_alt" />
                <a href="#">Popular</a>
              </li>
              <li>
                <i className="icon_piechart" />
                <a href="#">Recent</a>
              </li>
              <li>
                <i className="icon_info_alt" />
                <a href="#">Unanswered</a>
              </li>
            </ul>
          </div>
          <div className="widget ticket_widget">
            <h4 className="c_head">Ticket Categories</h4>
            <ul className="list-unstyled ticket_categories">
              <li>
                <img src="img/home_support/cmm5.png" alt="category" />
                <a href="#">Docs WordPress Theme</a>{" "}
                <span className="count">10</span>
              </li>
              <li>
                <img src="img/home_support/cmm4.png" alt="category" />
                <a href="#">Product Landing Page</a>
                <span className="count count-fill">13</span>
                <span className="count">54</span>
              </li>
              <li>
                <img src="img/home_support/cmm2.png" alt="category" />
                <a href="#">Knowledge base Template</a>
                <span className="count">142</span>
              </li>
              <li>
                <img src="img/home_support/cmm8.png" alt="category" />
                <a href="#">Startup and App WP Theme</a>{" "}
                <span className="count">13</span>
              </li>
              <li>
                <img src="img/home_support/cmm9.png" alt="category" />
                <a href="#">Clean Email Template</a>{" "}
                <span className="count">123</span>
              </li>
              <li>
                <img src="img/home_support/cmm10.png" alt="category" />
                <a href="#">Apps WordPress Theme</a>{" "}
                <span className="count">18</span>
              </li>
            </ul>
          </div>
          <div className="widget tag_widget">
            <h4 className="c_head">Tags</h4>
            <ul className="list-unstyled w_tag_list style-light">
              <li>
                <a href="#">Swagger</a>
              </li>
              <li>
                <a href="#">KbDoc</a>
              </li>
              <li>
                <a href="#">weCare</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Doc</a>
              </li>
              <li>
                <a href="#">WordPress</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">ui/ux</a>
              </li>
              <li>
                <a href="#">Doc Design</a>
              </li>
              <li>
                <a href="#">DocAll</a>
              </li>
              <li>
                <a href="#">Productboard</a>
              </li>
              <li>
                <a href="#">Magento</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumSingleSidebar;
