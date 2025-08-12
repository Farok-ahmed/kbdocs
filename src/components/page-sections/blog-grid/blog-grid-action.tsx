"use client";
import man from "@/assets/img/blog-grid/man.png";
import shadowAction from "@/assets/img/blog-grid/shadow_action.png";
import Image from "next/image";
const BlogGridAction = () => {
  return (
    <>
      <section className="doc_action_area_three">
        <Image
          className="p_absolute shadows"
          src={shadowAction}
          alt=""
        />
        <Image className="p_absolute b_man" src={man} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="action_content">
                <h2>
                  Want to read more about your favourite <span>topic?</span>
                </h2>
                <p>Get regular updates in your inbox</p>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="footer_subscribe_form action_subscribe_form"
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button className="s_btn" type="submit">
                    Subcribe Now <i className="arrow_right" />
                  </button>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    I agree to the KbDoc
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridAction;
