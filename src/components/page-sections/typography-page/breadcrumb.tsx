import leafLeftImg from "@/assets/img/typography/leaf_left.png";
import leafRightImg from "@/assets/img/typography/leaf_right.png";
import man01Img from "@/assets/img/typography/man_01.png";
import man02Img from "@/assets/img/typography/man_02.png";
import Image from "next/image";

const Breadcrumb = () => {
  return (
    <>
      <div className="breadcrumb_area_three">
        <Image className="p_absolute one" src={leafLeftImg} alt="" />
        <Image className="p_absolute two" src={man01Img} alt="" />
        <Image className="p_absolute three" src={man02Img} alt="" />
        <Image className="p_absolute four" src={leafRightImg} alt="" />
        <div className="container">
          <div className="breadcrumb_text">
            <h2>
              Hello! here is <span>Typography</span>
            </h2>
            <p>
              KbDoc has the nice typography settings by default, if needed you
              can customize any of the elements font you can see in this page
              really easily from the theme options.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
