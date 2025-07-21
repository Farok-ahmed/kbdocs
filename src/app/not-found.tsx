"use client";

import { pages } from "@/utils/pages";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="error_area bg_color pb-5">
        <div className="error_dot one"></div>
        <div className="error_dot two"></div>
        <div className="error_dot three"></div>
        <div className="error_dot four"></div>
        <div className="container">
          <div className="error_content_two text-center">
            <div className="error_img">
              <img
                className="p_absolute error_shap"
                src="/img/404_bg.png"
                alt=""
              />
              <div className="one wow clipInDown" data-wow-delay="1s">
                <img className="img_one" src="/img/404_two.png" alt="" />
              </div>
              <div className="two wow clipInDown" data-wow-delay="1.5s">
                <img className="img_two" src="/img/404_three.png" alt="" />
              </div>
              <div className="three wow clipInDown" data-wow-delay="1.8s">
                <img className="img_three" src="/img/404_one.png" alt="" />
              </div>
            </div>
            <h2>Error. We can’t find the page you’re looking for.</h2>
            <p>
              Sorry for the inconvenience. Go to our homepage or check out our
              latest collections for Fashion, Chair, Decoration...
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="error_search">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </form>
            <Link href={pages.home} className="action_btn box_shadow_none">
              <i className="arrow_left"></i>Back to Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
