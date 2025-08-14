import shap01 from "@/assets/img/blog-classic/shap_01.png";
import shap02 from "@/assets/img/blog-classic/shap_02.png";
import bLeaf from "@/assets/img/home_one/b_leaf.svg";
import bManTwo from "@/assets/img/home_one/b_man_two.png";
import bannerBg from "@/assets/img/home_one/banner_bg.png";
import flower from "@/assets/img/home_one/flower.png";
import vIcon from "@/assets/img/v.svg";
import { formattedDate } from "@/utils/date-formate";
import Image from "next/image";
import Link from "next/link";
import SearchFieldBlog from "./search-field-blog";

const BlogGridBreadcrumb = () => {
  const defaultDate = new Date(); // Default date in YYYY-MM-DD format
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
        <div className="container">
          <SearchFieldBlog />
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
