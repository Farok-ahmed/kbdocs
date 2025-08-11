"use client";

import Link from "next/link";
import RegisterForm from './.components/register-form';


export default function RegisterPage() {
 

  return (
    <section className="signup_area signup_area_height">
      <div className="row ml-0 mr-0">
        <div className="sign_left signup_left">
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
            className="position-absolute middle wow fadeInRight"
            src="/img/signup/man_image.png"
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
                <img src="/img/signup/gmail.png" alt="" />
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
