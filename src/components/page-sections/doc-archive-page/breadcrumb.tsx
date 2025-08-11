
import SearchBreadcrumb from "@/components/search-breadcrumb";
import { formattedDate } from "@/utils/date-formate";
import Link from "next/link";

export interface BreadcrumbProps {
  name: string;
  link: string;
}

const Breadcrumb = () => {
  // Breadcurmb component
  const breadcrumb: BreadcrumbProps[] = [
    { name: "Home", link: "/" },
    { name: "Docs", link: "/docs" },
    { name: "KbDoc WordPress Theme", link: "" },
  ];
  
  // Default date for display
  // You can replace this with a dynamic date if needed
  const defaultDate = new Date();

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
                <i className="icon_clock_alt"></i>Updated on{" "}
                {formattedDate(defaultDate)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
