import leafRight from "@/assets/img/home_one/leaf_footter.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="simple_footer">
      <Image className="leaf_right" src={leafRight} alt="" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <p>
              © 2025 All Rights Reserved by <Link href="/">KbDoc</Link>
            </p>
          </div>
          <div className="col-sm-6 text-right">
            <ul className="list-unstyled f_social_icon">
              <li>
                <Link href="">
                  <i className="social_facebook"></i>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="social_twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="social_vimeo"></i>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="social_linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
