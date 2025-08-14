import cmm10 from "@/assets/img/home_support/cmm10.png";
import cmm2 from "@/assets/img/home_support/cmm2.png";
import cmm4 from "@/assets/img/home_support/cmm4.png";
import cmm5 from "@/assets/img/home_support/cmm5.png";
import cmm8 from "@/assets/img/home_support/cmm8.png";
import cmm9 from "@/assets/img/home_support/cmm9.png";
import Image from "next/image";
import Link from "next/link";

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
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <i className="icon_clock_alt" />
                <Link href="#">Popular</Link>
              </li>
              <li>
                <i className="icon_piechart" />
                <Link href="#">Recent</Link>
              </li>
              <li>
                <i className="icon_info_alt" />
                <Link href="#">Unanswered</Link>
              </li>
            </ul>
          </div>
          <div className="widget ticket_widget">
            <h4 className="c_head">Ticket Categories</h4>
            <ul className="list-unstyled ticket_categories">
              <li>
                <Image src={cmm5} alt="category" />
                <Link href="#">Docs WordPress Theme</Link>{" "}
                <span className="count">10</span>
              </li>
              <li>
                <Image src={cmm4} alt="category" />
                <Link href="#">Product Landing Page</Link>
                <span className="count count-fill">13</span>
                <span className="count">54</span>
              </li>
              <li>
                <Image src={cmm2} alt="category" />
                <Link href="#">Knowledge base Template</Link>
                <span className="count">142</span>
              </li>
              <li>
                <Image src={cmm8} alt="category" />
                <Link href="#">Startup and App WP Theme</Link>{" "}
                <span className="count">13</span>
              </li>
              <li>
                <Image src={cmm9} alt="category" />
                <Link href="#">Clean Email Template</Link>{" "}
                <span className="count">123</span>
              </li>
              <li>
                <Image src={cmm10} alt="category" />
                <Link href="#">Apps WordPress Theme</Link>{" "}
                <span className="count">18</span>
              </li>
            </ul>
          </div>
          <div className="widget tag_widget">
            <h4 className="c_head">Tags</h4>
            <ul className="list-unstyled w_tag_list style-light">
              <li>
                <Link href="#">Swagger</Link>
              </li>
              <li>
                <Link href="#">KbDoc</Link>
              </li>
              <li>
                <Link href="#">weCare</Link>
              </li>
              <li>
                <Link href="#">Business</Link>
              </li>
              <li>
                <Link href="#">Download</Link>
              </li>
              <li>
                <Link href="#">Doc</Link>
              </li>
              <li>
                <Link href="#">WordPress</Link>
              </li>
              <li>
                <Link href="#">Design</Link>
              </li>
              <li>
                <Link href="#">ui/ux</Link>
              </li>
              <li>
                <Link href="#">Doc Design</Link>
              </li>
              <li>
                <Link href="#">DocAll</Link>
              </li>
              <li>
                <Link href="#">Productboard</Link>
              </li>
              <li>
                <Link href="#">Magento</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumSingleSidebar;
