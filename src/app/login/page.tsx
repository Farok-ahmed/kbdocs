

import Link from "next/link";
import LoginForm from './.components/form';

export default function LoginPage() {
  

  return (
    <section className="signup_area">
      <div className="row ml-0 mr-0">
        <div className="sign_left signin_left">
          <h2>We are design changers do what matters.</h2>
          <img
            className="position-absolute top"
            src="/img/signup/top_ornamate.png"
            alt="top"
          />
          <img
            className="position-absolute bottom"
            src="/img/signup/bottom_ornamate.png"
            alt="bottom"
          />
          <img
            className="position-absolute middle"
            src="/img/signup/door.png"
            alt="bottom"
          />
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
                <img src="/img/signup/gmail.png" alt="" />
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
