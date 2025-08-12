"use client";
import community from "@/assets/img/community.png";
import email from "@/assets/img/email.png";
import twitter from "@/assets/img/twitter.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const ContactInfo = () => {
  return (
    <>
      <div className="section_title text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h_title wow fadeInUp"
        >
          Need to speak us?
        </motion.h2>
      </div>
      <div className="get_info_inner">
        <div className="row get_info_item align-items-center justify-content-between">
          <div className="col-lg-4 col-sm-5">
            <div className="media">
              <Image src={email} alt="" />
              <div className="media-body">
                <h5 className="h5 bold">Email</h5>
                <p>Monday to Friday</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-7 d-flex align-items-center justify-content-between">
            <div className="time">
              Expected response time: <span>72 hours</span>
            </div>
            <Link href="#" className="doc_border_btn doc_border_btn_two">
              Email Us
            </Link>
          </div>
        </div>
        <div className="row get_info_item align-items-center justify-content-between">
          <div className="col-lg-4 col-sm-5">
            <div className="media">
              <Image src={twitter} alt="" />
              <div className="media-body">
                <h5 className="h5 bold">Twitter</h5>
                <p>Monday to Friday</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-7 d-flex align-items-center justify-content-between">
            <div className="time">
              Expected response time: <span>72 hours</span>
            </div>
            <Link href="#" className="doc_border_btn doc_border_btn_two">
              Send Us a Tweet
            </Link>
          </div>
        </div>
        <div className="row get_info_item align-items-center justify-content-between">
          <div className="col-lg-4 col-sm-5">
            <div className="media">
              <Image src={community} alt="" />
              <div className="media-body">
                <h5 className="h5 bold">Community</h5>
                <p>Monday to Friday</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-7 d-flex align-items-center justify-content-between">
            <div className="time">
              Expected response time: <span>72 hours</span>
            </div>
            <Link href="#" className="doc_border_btn doc_border_btn_two">
              Ask The Community
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
