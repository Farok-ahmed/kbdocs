"use client";
import { formattedDate } from "@/utils/date-formate";
import Link from "next/link";

const BlogGridBreadcrumb = () => {
  const defaultDate = new Date(); // Default date in YYYY-MM-DD format
  return (
    <>
      <section className="breadcrumb_area">
        <img className="p_absolute bl_left" src="/img/v.svg" alt="" />
        <img
          className="p_absolute bl_right"
          src="/img/home_one/b_leaf.svg"
          alt=""
        />
        <img
          className="p_absolute star"
          src="/img/home_one/banner_bg.png"
          alt=""
        />
        <img
          className="p_absolute wave_shap_one"
          src="/img/blog-classic/shap_01.png"
          alt=""
        />
        <img
          className="p_absolute wave_shap_two"
          src="/img/blog-classic/shap_02.png"
          alt=""
        />
        <img
          className="p_absolute one wow fadeInRight"
          src="/img/home_one/b_man_two.png"
          alt=""
        />
        <img
          className="p_absolute two wow fadeInUp"
          data-wow-delay="0.2s"
          src="/img/home_one/flower.png"
          alt=""
        />
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            action="#"
            className="banner_search_form"
          >
            <input
              type="search"
              className="form-control"
              placeholder='Search ("/" to focus)'
            />
            <button type="submit">
              <i className="icon_search" />
            </button>
          </form>
        </div>
      </section>
      <section className="page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/blog-grid">Blog</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog Grid
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-sm-5">
              <Link href="#" className="date">
                <i className="icon_clock_alt" />
                Updated on {formattedDate(defaultDate)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridBreadcrumb;
