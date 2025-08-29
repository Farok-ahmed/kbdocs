import { tagsData, TicketCategories } from "@/app/forums/forum-data";
import Image from "next/image";
import Link from "next/link";

const ForumSidebar = () => {
  return (
    <>
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

          {/* .open-hours */}
        </div>

        <div className="widget ticket_widget">
          <h4 className="c_head">Ticket Categories</h4>

          <ul className="list-unstyled ticket_categories">
            {TicketCategories.map((category) => (
              <li key={category.id}>
                <Image src={category.icon} alt="category" />
                <Link href="/forum-topics">{category.name}</Link>
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
                <Link href="/forum-topics">{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ForumSidebar;
