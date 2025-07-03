import Link from "next/link";

interface ArticaleProps {
  id: number;
  href: string;
  icon?: string;
  title: string;
}
const ShortcodePage = () => {
  const articles: ArticaleProps[] = [
    {
      id: 1,
      href: "/docs/shortcodes/tab",
      icon: "icon_document_alt",
      title: "Tabs",
    },
    {
      id: 2,
      href: "accordion.html",
      icon: "icon_document_alt",
      title: "Accordion",
    },
    {
      id: 3,
      href: "notice.html",
      icon: "icon_document_alt",
      title: "Notices",
    },
    {
      id: 4,
      href: "table.html",
      icon: "icon_document_alt",
      title: "Table",
    },
    {
      id: 5,
      href: "lightbox.html",
      icon: "icon_document_alt",
      title: "Image Lightbox",
    },
    {
      id: 6,
      href: "tooltip.html",
      icon: "icon_document_alt",
      title: "Tooltip",
    },
    {
      id: 7,
      href: "image-pointing.html",
      icon: "icon_document_alt",
      title: "Image Hotspots",
    },
    {
      id: 8,
      href: "code.html",
      icon: "icon_document_alt",
      title: "Code",
    },
  ];
  return (
    <>
      <div className="documentation_info rvfs-4" id="post" data-rvfs={4}>
        <article className="documentation_body shortcode_text">
          <div className="shortcode_title">
            <h2 id="documentation">Getting Started</h2>
            <p>
              <span>Welcome to KbDoc !</span> Get familiar with the Stripe
              products and explore their features:
            </p>
          </div>
          <p>
            To use KbDoc WordPress theme you must have WordPress engine
            installed. We assume you have a working version of WordPress already
            up and running. We also encourage you to actively use the links
            below. These useful resources cover most of the general WordPress
            questions you may have:
          </p>
          <ul className="ul">
            <li>
              What is WordPress?&nbsp;
              <strong>
                <Link
                  href="https://en.wikipedia.org/wiki/WordPress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </Link>
              </strong>{" "}
              and WordPress FAQ&nbsp;
              <strong>
                <Link
                  href="https://codex.wordpress.org/FAQ_New_To_WordPress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read here!
                </Link>
              </strong>
            </li>
            <li>
              Tutorial on how to Install WordPress?&nbsp;
              <strong>
                <Link
                  href="https://www.youtube.com/watch?v=ell0SiTZyX8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </Link>
              </strong>
            </li>
            <li>
              WordPress Lessons&nbsp;
              <strong>
                <Link
                  href="https://codex.wordpress.org/WordPress_Lessons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Articles
                </Link>
              </strong>
            </li>
          </ul>
          <h4 className="c_head" id="article">
            Articles
          </h4>
          <ul className="list-unstyled article_list tag_list">
            {articles.map((article) => (
              <li key={article.id}>
                <Link href={article.href}>
                  <i className={article.icon} />
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
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
      </div>
    </>
  );
};

export default ShortcodePage;
