"use client";
import Select from "@/components/select";

const SearchBreadcrumb = () => {
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
        <div className="container custom_container">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="banner_search_form banner_search_form_two"
          >
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder='Search ("/" to focus)'
              />
              <div className="input-group-append">
                <Select
                  id="inlineFormCustomSelect"
                  options={[
                    {
                      value: "all-category",
                      label: "All Category",
                    },
                    {
                      value: "Doc Archive",
                      label: "Doc Archive",
                    },
                    {
                      value: "Doc List",
                      label: "Doc List",
                    },
                    {
                      value: "KbDoc",
                      label: "KbDoc",
                    },
                  ]}
                />
              </div>
              <button type="submit">
                <i className="icon_search"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchBreadcrumb;
