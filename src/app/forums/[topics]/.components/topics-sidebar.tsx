import Image from "next/image";
import Link from "next/link";
import { tagsData, TicketCategories } from "../../forum-data";

const TopicsSidebar = () => {
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
            {/* <!-- /.open-hours --> */}
          </div>

          <div className="widget usefull_links_widget">
            <h4 className="c_head">Usefull Links</h4>
            <ul className="list-unstyled usefull-links">
              <li>
                <i className="icon_lightbulb_alt"></i>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <i className="icon_clock_alt"></i>
                <Link href="#">Popular</Link>
              </li>
              <li>
                <i className="icon_piechart"></i>
                <Link href="#">Recent</Link>
              </li>
              <li>
                <i className="icon_info_alt"></i>
                <Link href="#">Unanswered</Link>
              </li>
            </ul>
          </div>
          <div className="widget ticket_widget">
            <h4 className="c_head">Ticket Categories</h4>

            <ul className="list-unstyled ticket_categories">
        {TicketCategories.map((category) => (
                <li key={category.id}>
          <Image src={category.icon} alt="category" />
                  <Link href="#">{category.name}</Link>
                  {category.activeCount && (
                    <span className="count count-fill">
                      {category.activeCount}
                    </span>
                  )}

                  <span className="count">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="widget tag_widget">
            <h4 className="c_head">Tags</h4>
            <ul className="list-unstyled w_tag_list style-light">
              {tagsData.map((tag) => (
                <li key={tag.id}>
                  <Link href="#">{tag.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicsSidebar;
