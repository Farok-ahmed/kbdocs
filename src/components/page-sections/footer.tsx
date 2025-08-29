"use client";
import cloudImg from "@/assets/img/home_two/cloud.png";
import emailIconImg from "@/assets/img/home_two/email-icon.png";
import emailIconTwoImg from "@/assets/img/home_two/email-icon_two.png";
import fManImg from "@/assets/img/home_two/f_man.png";
import manImg from "@/assets/img/home_two/man.png";
import logoImg from "@/assets/img/logo.png";
import vImg from "@/assets/img/v.svg";
import { pages } from "@/utils/pages";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const patname = usePathname();
  const isHomePage = patname === "/";
  return (
    <footer
      className={`footer_area f_bg_color ${isHomePage ? "footer_p_top" : ""}`}
    >
      <Image
        className="p_absolute leaf"
        src={vImg}
        alt=""
        width={180}
        height={125}
      />
      <motion.div
        // fade in left animation
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="p_absolute f_man wow fadeInLeft"
        data-wow-delay="0.4s"
      >
        <Image src={fManImg} alt="" />
      </motion.div>
      <Image className="p_absolute f_cloud" src={cloudImg} alt="" />
      <Image className="p_absolute f_email" src={emailIconImg} alt="" />
      <Image className="p_absolute f_email_two" src={emailIconTwoImg} alt="" />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="p_absolute f_man_two wow fadeInLeft"
        data-wow-delay="0.2s"
      >
        <Image src={manImg} alt="" />
      </motion.div>
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <motion.div
                // fade in up animation
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="f_widget subscribe_widget wow fadeInUp"
              >
                <Link href="" className="f_logo">
                  <Image src={logoImg} alt="" />
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
              </motion.div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <motion.div
                // fade in up animation
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="f_widget link_widget pl_30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3 className="f_title">Company</h3>
                <ul className="list-unstyled link_list">
                  <li>
                    <Link href="/login">Sign in</Link>
                  </li>
                  <li>
                    <Link href="/register">Sign up</Link>
                  </li>
                  <li>
                    <Link href="/typography">Typography</Link>
                  </li>
                  <li>
                    <Link href="/page-not-found">404 Page</Link>
                  </li>
                  <li>
                    <Link href="/typography">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">KbDoc for Good</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <motion.div
                // fade in up animation
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="f_widget link_widget wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <h3 className="f_title">Support</h3>
                <ul className="list-unstyled link_list">
                  <li>
                    <Link href={pages.helpDesk}>Help Desk</Link>
                  </li>
                  <li>
                    <Link href="/doc-archive">Knowledge Base</Link>
                  </li>
                  <li>
                    <Link href="/forum-single">Live Chat</Link>
                  </li>
                  <li>
                    <Link href="/doc-archive">Documentation</Link>
                  </li>
                  <li>
                    <Link href="/forums">Forums</Link>
                  </li>
                  <li>
                    <Link href="/forum-topics">Topics</Link>
                  </li>
                  <li>
                    <Link href="/forum-single">Messages</Link>
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <motion.div
                // fade in up animation
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="f_widget link_widget pl_70 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <h3 className="f_title">Doc Pages</h3>
                <ul className="list-unstyled link_list">
                  <li>
                    <Link href="/docs">Doc Topic</Link>
                  </li>
                  <li>
                    <Link href="/docs/shortcodes/tooltip">Tooltip</Link>
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
                    <Link href="/docs/content/keyboard-shortcuts">Keyboard Shortcuts</Link>
                  </li>
                  <li>
                    <Link href="/docs/content/cheatsheet">Cheatseet</Link>
                  </li>
                </ul>
              </motion.div>
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
