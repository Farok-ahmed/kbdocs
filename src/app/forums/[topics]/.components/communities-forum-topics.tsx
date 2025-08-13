import rc1 from "@/assets/img/home_support/rc1.png";
import rc2 from "@/assets/img/home_support/rc2.png";
import rc3 from "@/assets/img/home_support/rc3.png";
import rc4 from "@/assets/img/home_support/rc4.png";
import Image from "next/image";
import Link from "next/link";

const CommunitiesForumTopics = () => {
  return (
    <>
      <div className="communities-boxes">
        <div className="kbDoc-com-box">
          <div className="icon-container">
            <Image src={rc1} alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Getting Started</Link>
            </h3>
            <p className="total-post">453 Posts</p>
          </div>
        </div>

        <div className="kbDoc-com-box">
          <div className="icon-container">
            <Image src={rc2} alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Integrations</Link>
            </h3>
            <p className="total-post">624 Posts</p>
          </div>
        </div>

        <div className="kbDoc-com-box">
          <div className="icon-container">
            <Image src={rc3} alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Solar System</Link>
            </h3>
            <p className="total-post">120 Posts</p>
          </div>
        </div>

        <div className="kbDoc-com-box">
          <div className="icon-container">
            <Image src={rc4} alt="communinity-box" />
          </div>

          <div className="kbDoc-com-box-content">
            <h3 className="title">
              <Link href="#"> Cloud Server</Link>
            </h3>
            <p className="total-post">235 Posts</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommunitiesForumTopics;
