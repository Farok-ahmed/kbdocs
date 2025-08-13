import shap1 from "@/assets/img/blog-classic/shap_01.png";
import shap2 from "@/assets/img/blog-classic/shap_02.png";
import leaf from "@/assets/img/home_one/b_leaf.svg";
import manTwo from "@/assets/img/home_one/b_man_two.png";
import bannerBg from "@/assets/img/home_one/banner_bg.png";
import flower from "@/assets/img/home_one/flower.png";
import vSvg from "@/assets/img/v.svg";
import { formattedDate } from "@/utils/date-formate";
import Image from "next/image";
import Link from "next/link";
import BlogListSearch from "./blog-list-search";
interface BreadcrumbTopicProps {
  name: string;
  link: string;
  id: number;
}
const Breadcrumb = () => {
  const breadcrumbData: BreadcrumbTopicProps[] = [
    { name: "Home", link: "/", id: 1 },
    { name: "Blog", link: "/blog-list", id: 2 },
    {
      name: "Blog List",
      link: "",
      id: 3,
    },
  ];
  return (
    <>
      <section className="breadcrumb_area">
        <Image className="p_absolute bl_left" src={vSvg} alt="" />
        <Image
          className="p_absolute bl_right"
          src={leaf}
          alt=""
        />
        <Image
          className="p_absolute star"
          src={bannerBg}
          alt=""
        />
        <Image
          className="p_absolute wave_shap_one"
          src={shap1}
          alt=""
        />
        <Image
          className="p_absolute wave_shap_two"
          src={shap2}
          alt=""
        />
        <Image
          className="p_absolute one wow fadeInRight"
          src={manTwo}
          alt=""
          style={{ visibility: "visible", animationName: "fadeInRight" }}
        />
        <Image
          className="p_absolute two wow fadeInUp"
          data-wow-delay="0.2s"
          src={flower}
          alt=""
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        />
        <div className="container">
          <BlogListSearch />
        </div>
      </section>

      <section className="page_breadcrumb">
        <div className="container custom_container">
          <div className="row">
            <div className="col-sm-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumbData.map((item) => (
                    <li
                      key={item.id}
                      className={`breadcrumb-item ${
                        item.id === breadcrumbData.length ? "active" : ""
                      }`}
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
            <div className="col-sm-5">
              <Link href="" className="date">
                <i className="icon_clock_alt"></i>Updated on{" "}
                {formattedDate(new Date())}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
