import Search from "@/app/forum-topics/_components/search";
import shap01 from "@/assets/img/blog-classic/shap_01.png";
import shap02 from "@/assets/img/blog-classic/shap_02.png";
import bLeaf from "@/assets/img/home_one/b_leaf.svg";
import bManTwo from "@/assets/img/home_one/b_man_two.png";
import bannerBg from "@/assets/img/home_one/banner_bg.png";
import flower from "@/assets/img/home_one/flower.png";
import vIcon from "@/assets/img/v.svg";
import Image from "next/image";
import Link from "next/link";
interface BreadcrumbTopicProps {
  name: string;
  link: string;
  id: number;
}
const BreadcrumbTopic = () => {
  const breadcrumbData: BreadcrumbTopicProps[] = [
    { name: "Home", link: "/", id: 1 },
    { name: "Docs", link: "/docs", id: 2 },
    {
      name: "KbDoc WordPress Theme",
      link: "/docs",
      id: 3,
    },
  ];
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
        <Search />
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
                <i className="icon_clock_alt"></i>Updated on August 11, 2025
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbTopic;
