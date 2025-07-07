"use client";

import { pages } from "@/utils/pages";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer_area footer_p_top f_bg_color">
      <img className="p_absolute leaf" src="/img/v.svg" alt="" />
      <img
        className="p_absolute f_man wow fadeInLeft"
        data-wow-delay="0.4s"
        src="/img/home_two/f_man.png"
        alt=""
      />
      <img
        className="p_absolute f_cloud"
        src="/img/home_two/cloud.png"
        alt=""
      />
      <img
        className="p_absolute f_email"
        src="/img/home_two/email-icon.png"
        alt=""
      />
      <img
        className="p_absolute f_email_two"
        src="/img/home_two/email-icon_two.png"
        alt=""
      />
      <img
        className="p_absolute f_man_two wow fadeInLeft"
        data-wow-delay="0.2s"
        src="/img/home_two/man.png"
        alt=""
      />
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="f_widget subscribe_widget wow fadeInUp">
                <Link href="" className="f_logo">
                  <img src="/img/logo.png" alt="" />
                </Link>
                <h4 className="c_head">Subscribe to our newsletter</h4>
                <form
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                  className="footer_subscribe_form"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                  <button type="submit" className="s_btn">
                    Send
                  </button>
                </form>
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
            <div className="col-lg-3 col-sm-6">
              <div
                className="f_widget link_widget pl_30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3 className="f_title">Company</h3>
                <ul className="list-unstyled link_list">
                  <li>
                    <Link href="">About Us</Link>
                  </li>
                  <li>
                    <Link href="">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="">Affiliates</Link>
                  </li>
                  <li>
                    <Link href="">Partners</Link>
                  </li>
                  <li>
                    <Link href="">Careers</Link>
                  </li>
                  <li>
                    <Link href="">KbDoc for Good</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div
                className="f_widget link_widget wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3 className="f_title">Support</h3>
                <ul className="list-unstyled link_list">
                  <li>
                    <Link href={pages.helpDesk}>Help Desk</Link>
                  </li>
                  <li>
                    <Link href="/">Knowledge Base</Link>
                  </li>
                  <li>
                    <Link href="">Live Chat</Link>
                  </li>
                  <li>
                    <Link href="">Integrations</Link>
                  </li>
                  <li>
                    <Link href="">Reports</Link>
                  </li>
                  <li>
                    <Link href="">iOS & Android</Link>
                  </li>
                  <li>
                    <Link href="">Messages</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="f_widget link_widget pl_70 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <h3 className="f_title">Doc Pages</h3>
                <ul className="list-unstyled link_list">
                  <li>
                    <Link href="/docs">Doc Topic</Link>
                  </li>
                  <li>
                    <Link href="">Free Training</Link>
                  </li>
                  <li>
                    <Link href="/doc-archive">Doc Archive</Link>
                  </li>
                  <li>
                    <Link href="/docs/changelog">Changelog</Link>
                  </li>
                  <li>
                    <Link href="/one-page">Onepage Docs</Link>
                  </li>
                  <li>
                    <Link href="">Conversion Tracking</Link>
                  </li>
                  <li>
                    <Link href="/docs/cheatsheet">Cheat Sheet</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border_bottom"></div>
        </div>
      </div>
      <div className="footer_bottom text-center">
        <div className="container">
          <p>
            © {new Date().getFullYear()} All Rights Reserved by{" "}
            <Link href="/">KbDoc</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
