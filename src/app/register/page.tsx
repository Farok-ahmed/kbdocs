import bottomOrnamate from "@/assets/img/signup/bottom_ornamate.png";
import gmail from "@/assets/img/signup/gmail.png";
import manImage from "@/assets/img/signup/man_image.png";
import topOrnamate from "@/assets/img/signup/top_ornamate.png";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./.components/register-form";

export default function RegisterPage() {
  return (
    <section className="signup_area signup_area_height">
      <div className="row ml-0 mr-0">
        <div className="sign_left signup_left">
          <h2>We are design changers do what matters.</h2>
          <Image
            className="position-absolute top"
            src={topOrnamate}
            alt="top"
          />
          <Image
            className="position-absolute bottom"
            src={bottomOrnamate}
            alt="bottom"
          />
          <Image
            className="position-absolute middle wow fadeInRight"
            src={manImage}
            alt="bottom"
          />
          <div
            style={{ display: "none" }}
            className="round wow zoomIn"
            data-wow-delay="0.2s"
          ></div>
        </div>
        <div className="sign_right signup_right py-5">
          <div className="sign_inner signup_inner">
            <div className="text-center">
              <h3>Create your KbDoc Account</h3>
              <p>
                Already have an account? <Link href="/login">Sign in</Link>
              </p>
              <Link href="" className="btn-google">
                <Image
                  src={gmail}
                  alt=""
                  width={24}
                  style={{ height: "auto" }}
                />
                <span className="btn-text">Sign up with Google</span>
              </Link>
            </div>
            <div className="divider">
              <span className="or-text">or</span>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
