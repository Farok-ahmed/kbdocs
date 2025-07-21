import SearchBreadcrumb from "@/components/search-breadcrumb";
import Link from "next/link";
interface BreadcrumbTopicProps {
  name: string;
  link: string;
  id: number;
}
const BreadcrumbTopic = () => {
  const breadcrumbData: BreadcrumbTopicProps[] = [
    { name: "Home", link: "/", id: 1 },
    { name: "Docs", link: "/docs", id: 2 },
    {
      name: "KbDoc WordPress Theme",
      link: "/docs/kbdoc-wordpress-theme",
      id: 3,
    },
  ];
  return (
    <>
      <SearchBreadcrumb />
      <section className="page_breadcrumb">
        <div className="container custom_container">
          <div className="row">
            <div className="col-sm-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumbData.map((item) => (
                    <li
                      key={item.id}
                      className={`breadcrumb-item ${
                        item.id === breadcrumbData.length ? "active" : ""
                      }`}
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <div className="col-sm-5">
              <Link href="" className="date">
                <i className="icon_clock_alt"></i>Updated on March 03, 2020
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbTopic;
