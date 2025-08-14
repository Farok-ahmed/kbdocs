import error404Bg from "@/assets/img/404_bg.png";
import error404One from "@/assets/img/404_one.png";
import error404Three from "@/assets/img/404_three.png";
import error404Two from "@/assets/img/404_two.png";
import { pages } from "@/utils/pages";
import Image from "next/image";
import Link from "next/link";
import SearchField from "./search-field";

const NotFoundComponent = () => {
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
              <Image
                className="p_absolute error_shap"
                src={error404Bg}
                alt=""
              />
              <div className="one wow clipInDown" data-wow-delay="1s">
                <Image className="img_one" src={error404Two} alt="" />
              </div>
              <div className="two wow clipInDown" data-wow-delay="1.5s">
                <Image className="img_two" src={error404Three} alt="" />
              </div>
              <div className="three wow clipInDown" data-wow-delay="1.8s">
                <Image className="img_three" src={error404One} alt="" />
              </div>
            </div>
            <h2>Error. We can’t find the page you’re looking for.</h2>
            <p>
              Sorry for the inconvenience. Go to our homepage or check out our
              latest collections for Fashion, Chair, Decoration...
            </p>
            <SearchField />
            <Link href={pages.home} className="action_btn box_shadow_none">
              <i className="arrow_left"></i>Back to Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundComponent;
