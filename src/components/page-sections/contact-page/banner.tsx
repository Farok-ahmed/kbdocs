import bLeaf from "@/assets/img/home_one/b_leaf.svg";
import bManTwo from "@/assets/img/home_one/b_man_two.png";
import vIcon from "@/assets/img/v.svg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="breadcrumb_area breadcrumb_area_four">
      <Image className="p_absolute bl_left" src={vIcon} alt="" />
      <Image
        className="p_absolute bl_right"
        src={bLeaf}
        alt=""
      />
      <Image
        className="p_absolute one wow fadeInRight"
        src={bManTwo}
        alt=""
      />
      <div className="container">
        <div className="breadcrumb_content_two text-center">
          <h2>Contact</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="#">Pages</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;
