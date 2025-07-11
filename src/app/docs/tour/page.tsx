"use client";
import DocsLayout from "@/components/DocsLayout";
import { motion } from "framer-motion";
import Link from "next/link";
const TourPage = () => {
  return (
    <>
      <DocsLayout>
        <div className="documentation_info tour_content">
          <div className="documentation_body" id="documentation">
            <div className="shortcode_title">
              <h1>Welcome to KbDoc !</h1>
              <p>
                Documentation and examples for typography, including global
                settings, headings, body text, lists, and more.With your help,
                we're working together to build a library of detailed answers to
                every question about programming.
              </p>
            </div>
            <div className="border_bottom" />
            <div className="tour_item">
              <h4 className="c_head load-order-2" id="head">
                Ask questions, get answer no distractions
                <Link
                  className="anchorjs-link "
                  aria-label="Anchor"
                  data-anchorjs-icon=""
                  href="#head"
                  style={{
                    font: "1em / 1 anchorjs-icons",
                    paddingLeft: "0.375em",
                  }}
                />
              </h4>
              <div className="row align-items-center">
                <div className="col-sm-5 tour_info_content">
                  <p>
                    This site is all about <b>getting answers.</b> It's not a
                    discussion forum. There's no chit-chat.
                  </p>
                  <div className="just_question">
                    <div className="just_text question_top">
                      <p>Just questions....</p>
                      <motion.div
                        className="arrow"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.8,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        <img src="/img/arrow_top.png" alt="" />
                      </motion.div>
                    </div>
                    <div className="just_text answer_bottom">
                      <p>Just questions....</p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="arrow wow fadeInLeft"
                        data-wow-delay="0.9s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.9s",
                          animationName: "fadeInLeft",
                        }}
                      >
                        <img src="/img/arrow_bottom.png" alt="" />
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <motion.div
                    className="tour_preview_img"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      className="img-fluid"
                      src="/img/tour_img1.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="border_bottom" />
            <div className="tour_item">
              <h4 className="c_head">
                Get answers to practical, detailed questions
              </h4>
              <div className="row flex-row-reverse align-items-center tour_intro_item">
                <div className="col-sm-7">
                  <motion.div
                    className="tour_preview_img"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      className="img-fluid"
                      src="/img/tour_img2.png"
                      alt=""
                    />
                  </motion.div>
                </div>
                <div className="col-sm-5 tour_info_content">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="arrow wow fadeInLeft"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <img src="/img/arrow_bottom.png" alt="" />
                  </motion.div>
                  <p>
                    Focus on questions about an actual problem you have faced.
                    Include details about what you have tried and exactly what
                    you are trying to do.
                  </p>
                </div>
              </div>
              <div className="row align-items-center tour_intro_item">
                <div className="col-sm-7">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="tour_preview_img wow fadeInLeft"
                    data-wow-delay="0.7s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <img
                      className="img-fluid"
                      src="/img/tour_img3.png"
                      alt=""
                    />
                  </motion.div>
                </div>
                <div className="col-sm-5 tour_info_content">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="arrow wow fadeInRight"
                    data-wow-delay="0.9s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.9s",
                      animationName: "fadeInRight",
                    }}
                  >
                    <img src="/img/arrow_3.png" alt="" />
                  </motion.div>
                  <p>
                    Focus on questions about an actual problem you have faced.
                    Include details about what you have tried and exactly what
                    you are trying to do.
                  </p>
                </div>
              </div>
            </div>
            <div className="border_bottom" />
            <div className="tour_item last_tour_item">
              <h4
                className="c_head load-order-2"
                id="tags-make-it-easy-to-find-interesting-questions"
              >
                Tags make it easy to find interesting questions
                <Link
                  className="anchorjs-link "
                  aria-label="Anchor"
                  data-anchorjs-icon=""
                  href="#tags-make-it-easy-to-find-interesting-questions"
                  style={{
                    font: "1em / 1 anchorjs-icons",
                    paddingLeft: "0.375em",
                  }}
                />
              </h4>
              <div className="row align-items-center">
                <div className="col-sm-4 tour_info_content">
                  <p>
                    All questions are tagged with their subject areas. Each can
                    have up to 5 tags, since a question might be related to
                    several subjects.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="arrow text-right wow fadeInLeft"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <img src="/img/arrow_bottom.png" alt="" />
                  </motion.div>
                </div>
                <div className="col-sm-8">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="tour_preview_img wow fadeInRight"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInRight",
                    }}
                  >
                    <img
                      className="img-fluid"
                      src="/img/tour_img4.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocsLayout>
    </>
  );
};

export default TourPage;
