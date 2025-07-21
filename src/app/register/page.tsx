"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  // redirect to login page
  const router = useRouter();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
    router.push("/login");
  };

  return (
    <section className="signup_area signup_area_height">
      <div className="row ml-0 mr-0">
        <div className="sign_left signup_left">
          <h2>We are design changers do what matters.</h2>
          <img
            className="position-absolute top"
            src="img/signup/top_ornamate.png"
            alt="top"
          />
          <img
            className="position-absolute bottom"
            src="img/signup/bottom_ornamate.png"
            alt="bottom"
          />
          <img
            className="position-absolute middle wow fadeInRight"
            src="img/signup/man_image.png"
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
                <img src="img/signup/gmail.png" alt="" />
                <span className="btn-text">Sign up with Google</span>
              </Link>
            </div>
            <div className="divider">
              <span className="or-text">or</span>
            </div>
            <form onSubmit={handleRegister} className="row login_form">
              <div className="col-sm-6 form-group">
                <div className="small_text">First name</div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Muhammad"
                />
              </div>
              <div className="col-sm-6 form-group">
                <div className="small_text">Last name</div>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  id="lname"
                  placeholder="Jewel"
                />
              </div>
              <div className="col-lg-12 form-group">
                <div className="small_text">Your email</div>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="info@KbDoc.com"
                />
              </div>
              <div className="col-lg-12 form-group">
                <div className="small_text">Password</div>
                <input
                  id="signup-password"
                  name="signup-password"
                  type="password"
                  className="form-control"
                  placeholder="5+ characters required"
                  autoComplete="off"
                />
              </div>
              <div className="col-lg-12 form-group">
                <div className="small_text">Confirm password</div>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  className="form-control"
                  placeholder="5+ characters required"
                  autoComplete="off"
                />
              </div>
              <div className="col-lg-12 form-group">
                <div className="check_box">
                  <input
                    type="checkbox"
                    value="None"
                    id="squared2"
                    name="check"
                  />
                  <label className="l_text" htmlFor="squared2">
                    I accept the <span>politic of confidentiality</span>
                  </label>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button type="submit" className="btn action_btn thm_btn">
                  Create an account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
