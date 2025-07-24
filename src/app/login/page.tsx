"use client";

import Link from "next/link";

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };

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
            <form onSubmit={handleLogin} className="row login_form">
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
                <div className="small_text">Confirm password</div>
                <div className="confirm_password">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    className="form-control"
                    placeholder="5+ characters required"
                    autoComplete="off"
                  />
                  <Link href="" className="forget_btn">
                    Forgotten password?
                  </Link>
                </div>
              </div>

              <div className="col-lg-12 text-center">
                <button type="submit" className="btn action_btn thm_btn">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
