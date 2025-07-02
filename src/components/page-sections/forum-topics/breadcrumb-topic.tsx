import Link from "next/link";

const BreadcrumbTopic = () => {
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
            action="#"
            className="banner_search_form banner_search_form_two"
          >
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder='Search ("/" to focus)'
              />
              <div className="input-group-append">
                <select className="custom-select" id="inlineFormCustomSelect">
                  <option>All Category</option>
                  <option value="1">Doc Archive</option>
                  <option value="2">Doc List</option>
                  <option value="3">KbDoc</option>
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
                  <li className="breadcrumb-item">
                    <Link href="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="#">Blog</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog with sidebar
                  </li>
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

export default BreadcrumbTopic;
