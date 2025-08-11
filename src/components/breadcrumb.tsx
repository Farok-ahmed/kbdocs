
import { BreadcrumbProps } from "@/types/breadcrumb-types";
import Link from "next/link";
import SearchBreadcrumb from "./search-breadcrumb";

type Props = {
  breadcrumb: BreadcrumbProps[];
};
const Breadcrumb = ({ breadcrumb }: Props) => {
  
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
                      {/* breadcrumb active class add */}

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
                <i className="icon_clock_alt"></i>Updated on March 03, 2020
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
