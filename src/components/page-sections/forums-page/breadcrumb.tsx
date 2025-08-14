import shap01 from "@/assets/img/blog-classic/shap_01.png";
import shap02 from "@/assets/img/blog-classic/shap_02.png";
import bLeaf from "@/assets/img/home_one/b_leaf.svg";
import bManTwo from "@/assets/img/home_one/b_man_two.png";
import bannerBg from "@/assets/img/home_one/banner_bg.png";
import flower from "@/assets/img/home_one/flower.png";
import vIcon from "@/assets/img/v.svg";
import Image from "next/image";
import Link from "next/link";

const breadcrumb = () => {
  return (
    <>
      <section className="breadcrumb_area">
        <Image className="p_absolute bl_left" src={vIcon} alt="" />
        <Image className="p_absolute bl_right" src={bLeaf} alt="" />
        <Image className="p_absolute star" src={bannerBg} alt="" />
        <Image className="p_absolute wave_shap_one" src={shap01} alt="" />
        <Image className="p_absolute wave_shap_two" src={shap02} alt="" />
        <Image
          className="p_absolute one wow fadeInRight"
          src={bManTwo}
          alt=""
        />
        <Image
          className="p_absolute two wow fadeInUp"
          data-wow-delay="0.2s"
          src={flower}
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

export default breadcrumb;
