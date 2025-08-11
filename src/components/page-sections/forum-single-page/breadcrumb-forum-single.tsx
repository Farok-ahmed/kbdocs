import SearchBreadcrumb from "@/components/search-breadcrumb";
import Link from "next/link";

const BreadcrumbForumSingle = () => {
  const breadcrumb = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog-grid" },
    { name: "Blog with sidebar", link: "" },
  ];
  return (
    <>
      <SearchBreadcrumb />

      <section className="page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumb.map((item, index) => (
                    <li
                      key={index}
                      className="breadcrumb-item"
                      aria-current={
                        index === breadcrumb.length - 1 ? "page" : undefined
                      }
                    >
                      <Link
                        className={`${
                          index === breadcrumb.length - 1 ? "active" : ""
                        }`}
                        href={item.link}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <div className="col-sm-5">
              <Link href="#" className="date">
                <i className="icon_clock_alt"></i>Updated on August 11, 2025
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbForumSingle;
