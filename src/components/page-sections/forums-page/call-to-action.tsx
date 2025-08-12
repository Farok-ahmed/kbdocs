import chatSmileImg from "@/assets/img/home_support/chat-smile.png";
import Image from "next/image";
import Link from "next/link";

const CallToActionForums = () => {
  return (
    <>
      <div className="call-to-action">
        <div className="overlay-bg"></div>
        <div className="container">
          <div className="action-content-wrapper">
            <div className="action-title-wrap title-img">
              <Image src={chatSmileImg} alt="" />
              <h2 className="action-title">New to Communities?</h2>
            </div>
            <Link href="#" className="action_btn">
              Join the community <i className="arrow_right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionForums;
