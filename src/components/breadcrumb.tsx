"use client";
import { BreadcrumbProps, CategoryProps } from "@/types/breadcrumb-types";
import Link from "next/link";

type Props = {
  breadcrumb: BreadcrumbProps[];
  categories: CategoryProps[];
};
const Breadcrumb = ({ breadcrumb, categories }: Props) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="breadcrumb_area">
        <img className="p_absolute bl_left" src="img/v.svg" alt="" />
        <img
          className="p_absolute bl_right"
          src="img/home_one/b_leaf.svg"
          alt=""
        />
        <img
          className="p_absolute star"
          src="img/home_one/banner_bg.png"
          alt=""
        />
        <img
          className="p_absolute wave_shap_one"
          src="img/blog-classic/shap_01.png"
          alt=""
        />
        <img
          className="p_absolute wave_shap_two"
          src="img/blog-classic/shap_02.png"
          alt=""
        />
        <img
          className="p_absolute one wow fadeInRight"
          src="img/home_one/b_man_two.png"
          alt=""
        />
        <img
          className="p_absolute two wow fadeInUp"
          data-wow-delay="0.2s"
          src="img/home_one/flower.png"
          alt=""
        />
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="banner_search_form banner_search_form_two"
          >
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder='Search ("/" to focus)'
              />
              <div className="input-group-append">
                <select className=" custom-select" id="inlineFormCustomSelect">
                  <option>All Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit">
                <i className="icon_search"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
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
