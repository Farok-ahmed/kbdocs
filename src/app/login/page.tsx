import bottomOrnamate from "@/assets/img/signup/bottom_ornamate.png";
import door from "@/assets/img/signup/door.png";
import gmail from "@/assets/img/signup/gmail.png";
import topOrnamate from "@/assets/img/signup/top_ornamate.png";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./.components/form";

export default function LoginPage() {
  return (
    <section className="signup_area">
      <div className="row ml-0 mr-0">
        <div className="sign_left signin_left">
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
          <Image className="position-absolute middle" src={door} alt="bottom" />
          <div className="round"></div>
        </div>
        <div className="sign_right signup_right">
          <div className="sign_inner signup_inner">
            <div className="text-center">
              <h3>Sign in to KbDoc platform</h3>
              <p>
                Don’t have an account yet?{" "}
                <Link href="/register">Sign up here</Link>
              </p>
              <Link href="" className="btn-google">
                <Image
                  src={gmail}
                  alt=""
                  style={{ width: 24, height: "auto" }}
                />
                <span className="btn-text">Sign in with Gmail</span>
              </Link>
            </div>
            <div className="divider">
              <span className="or-text">or</span>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
