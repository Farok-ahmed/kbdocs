"use client";
import DefaultLayout from "@/components/layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ChartWithStats from "./.components/ChartWithStats";
import CommunityPosts from "./.components/community-posts";
import CommunitySection from "./.components/community-section";
import WorkCount from "./.components/work-count";
type SupportTopic = {
  id: number;
  icon: string;
  title: string;
  posts: string;
  link: string;
  delay: number;
};

type Community = {
  id: number;
  title: string;
  image: string;
  posts: number;
  link: string;
  delay: number;
};

export default function HelpDeskPage() {
  const [communityShow, setCommunityShow] = useState<boolean>(false);

  const toggleCommunity = () => {
    setCommunityShow((prev) => !prev);
  };
  const MotionLink = motion(Link);
  const supportTopics: SupportTopic[] = [
    {
      id: 1,
      icon: "/img/home_support/rc1.png",
      title: "Getting Started",
      posts: "453 Posts",
      link: "/forums",
      delay: 0.5,
    },
    {
      id: 2,
      icon: "/img/home_support/rc2.png",
      title: "Integrations",
      posts: "624 Posts",
      link: "",
      delay: 0.7,
    },
    {
      id: 3,
      icon: "/img/home_support/rc3.png",
      title: "Solar System",
      posts: "120 Posts",
      link: "/forums",
      delay: 0.9,
    },
    {
      id: 4,
      icon: "/img/home_support/rc4.png",
      title: "Cloud Server",
      posts: "235 Posts",
      link: "/forums",
      delay: 1.1,
    },
    {
      id: 5,
      icon: "/img/home_support/rc5.png",
      title: "Integrate Quickly",
      posts: "542 Posts",
      link: "/forums",
      delay: 1.3,
    },
  ];

  const communities: Community[] = [
    {
      id: 1,
      title: "Deployment",
      image: "/img/home_support/rc6.png",
      posts: 453,
      link: "/forums",
      delay: 100,
    },
    {
      id: 2,
      title: "Configuration",
      image: "/img/home_support/rc7.png",
      posts: 624,
      link: "/forums",
      delay: 200,
    },
    {
      id: 3,
      title: "App Management",
      image: "/img/home_support/rc8.png",
      posts: 120,
      link: "/forums",
      delay: 300,
    },
    {
      id: 4,
      title: "Marketplaces",
      image: "/img/home_support/rc9.png",
      posts: 235,
      link: "/forums",
      delay: 400,
    },
    {
      id: 5,
      title: "Integrate Quickly",
      image: "/img/home_support/rc10.png",
      posts: 542,
      link: "/forums",
      delay: 500,
    },
    {
      id: 6,
      title: "Integrate Quickly",
      image: "/img/home_support/rc12.png",
      posts: 542,
      link: "/forums",
      delay: 600,
    },
    {
      id: 7,
      title: "Go Global",
      image: "/img/home_support/rc13.png",
      posts: 542,
      link: "/forums",
      delay: 700,
    },
    {
      id: 8,
      title: "Customize",
      image: "/img/home_support/rc14.png",
      posts: 542,
      link: "#",
      delay: 800,
    },
    {
      id: 9,
      title: "From Commissions",
      image: "/img/home_support/rc15.png",
      posts: 542,
      link: "/forums",
      delay: 900,
    },
    {
      id: 10,
      title: "Service Based",
      image: "/img/home_support/rc16.png",
      posts: 542,
      link: "/forums",
      delay: 1000,
    },
  ];

  return (
    <DefaultLayout>
      <section className="kbDoc-banner-support">
        <div className="banner-content text-center">
          <div className="banner-content-wrapper">
            <h1 className="banner-title wow fadeInUp">
              KbDoc Support Communities
            </h1>
            <p
              className="banner-description wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Find answers, ask questions, and connect with our community of
              KbDoc users
              <br /> from around the world.
            </p>
            <div
              className="banner-search-form-wrapper wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                action=""
                className="banner-search-form"
              >
                <input type="text" placeholder="Search or ask a question.." />
                <button type="submit">
                  <i className="icon_search"></i>
                </button>
              </form>
              {/* /.banner-search-form --> */}
            </div>
            {/* /.banner-search-form-wrapper --> */}
          </div>
          {/* /.banner-content-wrapper --> */}
        </div>
        {/* /.banner-content --> */}
        <ul className="people-image wow fadeIn" data-wow-delay="0.7s">
          <li>
            <motion.img
              src="/img/home_support/bn1.jpg"
              alt="people"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="rounded-lg"
            />
          </li>
          <li>
            <motion.img
              className="wow zoomIn"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              data-wow-delay="0.4s"
              src="/img/home_support/bn2.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              className="wow zoomIn"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              data-wow-delay="0.4s"
              src="/img/home_support/bn3.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              className="wow zoomIn"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              data-wow-delay="0.4s"
              src="/img/home_support/bn4.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              className="wow zoomIn"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              data-wow-delay="0.4s"
              src="/img/home_support/bn5.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="/img/home_support/bn6.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              className="wow zoomIn"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              data-wow-delay="0.4s"
              src="/img/home_support/bn7.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="/img/home_support/bn8.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="/img/home_support/bn9.jpg"
              alt="people"
            />
          </li>
          <li>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="/img/home_support/bn10.jpg"
              alt="people"
            />
          </li>
        </ul>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="partical-animation wow fadeIn"
          data-wow-delay="0.9s"
        >
          <li className="partical">
            <img
              data-parallax='{"x": -180, "y": 80, "rotateY":2000}'
              src="/img/home_support/bnp1.png"
              alt="partical"
            />
          </li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical"></li>
          <li className="partical">
            <img
              src="/img/home_support/bnp2.png"
              data-parallax='{"x": -250, "y": -160, "rotateZ":200}'
              alt="partical"
            />
          </li>
        </motion.ul>
        <div className="bottom-shape">
          <img src="/img/home_support/banner-bottom-shape.png" alt="banner" />
        </div>
      </section>
      {/* /.kbDoc-banner-support --> */}

      <section className="related-communities">
        <div className="container">
          <div className="section_title text-center">
            <motion.h2
              className="h_title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Select your product to find
              <br />
              Related communities
            </motion.h2>
          </div>

          <div className="communities-boxes">
            {supportTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                className="kbDoc-com-box"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: topic.delay,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="icon-container">
                  <img src={topic.icon} alt="community-box" />
                </div>
                <div className="kbDoc-com-box-content">
                  <h3 className="title">
                    <Link href={topic.link || "#"}>{topic.title}</Link>
                  </h3>
                  <p className="total-post">{topic.posts}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* /.communities-boxes --> */}

          <div className="more-communities">
            <Link
              onClick={(e) => {
                e.preventDefault();
                toggleCommunity();
              }}
              href="#"
              className={`collapse-btn ${communityShow ? "active" : ""}`}
            >
              More Communities <i className="icon_plus"></i>
            </Link>

            {communityShow && (
              <div
                className="collapse-wrap"
                id="more-category"
                style={{ display: "block" }}
              >
                <div className="communities-boxes">
                  {communities.map((community) => (
                    <div className="kbDoc-com-box" key={community.id}>
                      <div className="icon-container">
                        <img src={community.image} alt="communinity-box" />
                      </div>
                      <div className="kbDoc-com-box-content">
                        <h3 className="title">
                          <Link href="/forums">{community.title}</Link>
                        </h3>
                        <p className="total-post">{community.posts} Posts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* /.collapse-wrap --> */}
          </div>
          {/* /.more-communities --> */}
        </div>
        {/* /.container --> */}
      </section>
      {/* /.related-communities --> */}
      <ChartWithStats />

      {/* /.status-chart --> */}

      <section className="funfact-area">
        <div className="container">
          <div className="smile has-animation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="260px"
              height="260px"
              xmlSpace="preserve"
            >
              <path
                strokeLinecap="round"
                className="path"
                fill="none"
                stroke="#fbe1db"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M100.000,200.000 C44.860,200.000 -0.000,155.139 -0.000,100.000 C-0.000,44.860 44.860,-0.001 100.000,-0.001 C155.141,-0.001 200.000,44.860 200.000,100.000 C200.000,155.139 155.140,200.000 100.000,200.000 ZM160.496,34.528 C144.586,19.816 123.327,10.811 100.000,10.811 C50.821,10.811 10.811,50.821 10.811,100.000 C10.811,114.898 14.488,128.952 20.975,141.310 C25.233,149.424 30.703,156.808 37.146,163.216 C53.281,179.259 75.502,189.188 100.000,189.188 C149.179,189.188 189.189,149.178 189.189,100.000 C189.189,86.241 186.056,73.201 180.468,61.553 C175.556,51.315 168.745,42.155 160.496,34.528 ZM99.809,155.403 C97.481,155.403 95.146,155.272 92.807,155.002 C74.591,152.901 57.749,142.414 47.755,126.949 L56.835,121.081 C65.094,133.861 79.004,142.528 94.047,144.262 C113.349,146.489 132.625,137.389 143.164,121.081 L152.245,126.949 C140.768,144.708 120.724,155.403 99.809,155.403 ZM134.235,88.513 C128.265,88.513 123.424,83.673 123.424,77.702 C123.424,71.731 128.265,66.891 134.235,66.891 C140.206,66.891 145.047,71.731 145.047,77.702 C145.047,83.673 140.206,88.513 134.235,88.513 ZM67.343,88.513 C61.372,88.513 56.532,83.673 56.532,77.702 C56.532,71.731 61.372,66.891 67.343,66.891 C73.313,66.891 78.154,71.731 78.154,77.702 C78.154,83.673 73.313,88.513 67.343,88.513 Z"
              />
            </svg>
          </div>
          {/* /.smile --> */}

          <div className="section_title text-center">
            <motion.h2
              className="h_title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              Over 1200+
              <br />
              completed work & Still counting.
            </motion.h2>
          </div>

          <div className="funfact-boxes">
            <WorkCount />

            {/* /.funfact-box text-center --> */}
          </div>
          {/* /.fun-fact-boxes --> */}
        </div>
        {/* /.container --> */}
      </section>
      {/* /.funfact-area --> */}

      <section className="community-posts-area">
        <div className="container">
          <div className="section_title text-center">
            <motion.h2
              className="h_title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              KbDoc top community posts
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              Me old mucker chimney pot bodge so I said Oxford my lady show off
              show off pick your nose and blow off cack cheesed.!
            </motion.p>
          </div>

          <CommunityPosts />
          {/* /.community-posts-wrapper --> */}

          <div className="button-container text-center">
            <MotionLink
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              href=""
              className="doc_border_btn btn-round border-light all_doc_btn wow fadeInUp animated"
            >
              All sestems currently operational
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="18px"
                height="11px"
              >
                <path
                  fillRule="evenodd"
                  fill="rgb(16, 179, 214)"
                  d="M13.034,0.006 L12.323,0.738 L15.227,4.980 L-0.000,4.981 L-0.000,6.015 L15.227,6.015 L12.323,10.258 L13.034,10.990 L18.000,5.864 L18.000,5.131 L13.034,0.006 Z"
                />
              </svg>
            </MotionLink>
          </div>
          {/* /.button-container --> */}
        </div>
        {/* /.container --> */}
      </section>
      {/* /.community-posts-area --> */}

      <section className="about-journalism">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 md-order-two">
              <div className="journalism-content-wrapper">
                <motion.div
                  className="quote"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  <img src="/img/home_support/quote-top.png" alt="quote" />
                </motion.div>
                <motion.h2
                  className="journalism-title"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  KbDoc cares deeply
                  <br />
                  about journalism.
                </motion.h2>

                <motion.p
                  className="description"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Cheeky why my good sir nancy boy off his nut at public school
                  excuse my French well bog bugger porkies, eaton he legged it
                  owt to do with me gutted.!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="journalism-info wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h3 className="name">Chaplain Mondover</h3>
                  <span className="designation">CEO, KbDoc</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="quote dmt-4 wow fadeIn"
                  data-wow-delay="1s"
                >
                  <img src="/img/home_support/quote-bottom.png" alt="quote" />
                </motion.div>
              </div>
              {/* /.journalism-content-wrapper --> */}
            </div>
            {/* /.col-md-6 --> */}

            <div className="col-lg-5">
              <motion.div
                className="journalism-feature-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img src="/img/home_support/journalism.png" alt="journalism" />
              </motion.div>
              {/* /.journalism-feature-image --> */}
            </div>
            {/* /.col-md-6 --> */}
          </div>
          {/* /.row --> */}
        </div>
        {/* /.container --> */}

        <div className="light-header">
          <motion.h2
            className="title-light"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            OUR COMMITMENT
          </motion.h2>
        </div>
      </section>
      {/* /.about-journalism --> */}

      <section className="communities">
        <div className="container">
          <div className="section_title title-img text-center">
            <img src="/img/home_support/com_sm.png" alt="community" />

            <motion.h2
              className="title-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              New to Communities?
            </motion.h2>

            <MotionLink
              href=""
              className="action_btn"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Join the community <i className="arrow_right"></i>
            </MotionLink>
          </div>

          <div className="row justify-content-center">
            <CommunitySection />
          </div>
          {/* /.row --> */}
        </div>
        {/* /.container --> */}
      </section>
    </DefaultLayout>
  );
}
