"use client";
import DefaultLayout from "@/components/layout";
import Link from "next/link";
import CountUp from "react-countup";

export default function HelpDeskPage() {
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
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn1.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn2.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn3.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn4.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn5.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn6.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn7.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn8.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn9.jpg"
              alt="people"
            />
          </li>
          <li>
            <img
              className="wow zoomIn"
              data-wow-delay="0.4s"
              src="img/home_support/bn10.jpg"
              alt="people"
            />
          </li>
        </ul>
        <ul className="partical-animation wow fadeIn" data-wow-delay="0.9s">
          <li className="partical">
            <img
              data-parallax='{"x": -180, "y": 80, "rotateY":2000}'
              src="img/home_support/bnp1.png"
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
              src="img/home_support/bnp2.png"
              data-parallax='{"x": -250, "y": -160, "rotateZ":200}'
              alt="partical"
            />
          </li>
        </ul>
        <div className="bottom-shape">
          <img src="img/home_support/banner-bottom-shape.png" alt="banner" />
        </div>
      </section>
      {/* /.kbDoc-banner-support --> */}

      <section className="related-communities">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="h_title wow fadeInUp">
              Select your product to find
              <br />
              Related communities
            </h2>
          </div>

          <div className="communities-boxes">
            <div
              className="kbDoc-com-box wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <div className="icon-container">
                <img src="img/home_support/rc1.png" alt="communinity-box" />
              </div>
              <div className="kbDoc-com-box-content">
                <h3 className="title">
                  <Link href="/forums"> Getting Started</Link>
                </h3>

                <p className="total-post">453 Posts</p>
              </div>
              {/* /.kbDoc-com-box-content --> */}
            </div>
            {/* /.kbDoc-com-box --> */}

            <div
              className="kbDoc-com-box wow fadeInRight"
              data-wow-delay="0.7s"
            >
              <div className="icon-container">
                <img src="img/home_support/rc2.png" alt="communinity-box" />
              </div>
              <div className="kbDoc-com-box-content">
                <h3 className="title">
                  <Link href=""> Integrations</Link>
                </h3>
                <p className="total-post">624 Posts</p>
              </div>
              {/* /.kbDoc-com-box-content --> */}
            </div>
            {/* /.kbDoc-com-box --> */}

            <div
              className="kbDoc-com-box wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <div className="icon-container">
                <img src="img/home_support/rc3.png" alt="communinity-box" />
              </div>
              <div className="kbDoc-com-box-content">
                <h3 className="title">
                  <Link href="/forums"> Solar System</Link>
                </h3>
                <p className="total-post">120 Posts</p>
              </div>
              {/* /.kbDoc-com-box-content --> */}
            </div>
            {/* /.kbDoc-com-box --> */}

            <div
              className="kbDoc-com-box wow fadeInRight"
              data-wow-delay="1.1s"
            >
              <div className="icon-container">
                <img src="img/home_support/rc4.png" alt="communinity-box" />
              </div>
              <div className="kbDoc-com-box-content">
                <h3 className="title">
                  <Link href="/forums"> Cloud Server</Link>
                </h3>
                <p className="total-post">235 Posts</p>
              </div>
              {/* /.kbDoc-com-box-content --> */}
            </div>
            {/* /.kbDoc-com-box --> */}

            <div
              className="kbDoc-com-box wow fadeInRight"
              data-wow-delay="1.3s"
            >
              <div className="icon-container">
                <img src="img/home_support/rc5.png" alt="communinity-box" />
              </div>
              <div className="kbDoc-com-box-content">
                <h3 className="title">
                  <Link href="/forums"> Integrate Quickly</Link>
                </h3>
                <p className="total-post">542 Posts</p>
              </div>
              {/* /.kbDoc-com-box-content --> */}
            </div>
            {/* /.kbDoc-com-box --> */}
          </div>
          {/* /.communities-boxes --> */}

          <div className="more-communities">
            <Link href="#more-category" className="collapse-btn">
              More Communities <i className="icon_plus"></i>
            </Link>

            <div className="collapse-wrap" id="more-category">
              <div className="communities-boxes">
                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img src="img/home_support/rc6.png" alt="communinity-box" />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">Deployment</Link>
                    </h3>
                    <p className="total-post">453 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img src="img/home_support/rc7.png" alt="communinity-box" />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">Configuration</Link>
                    </h3>
                    <p className="total-post">624 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img src="img/home_support/rc8.png" alt="communinity-box" />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">App Management</Link>
                    </h3>
                    <p className="total-post">120 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img src="img/home_support/rc9.png" alt="communinity-box" />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">Marketplaces</Link>
                    </h3>
                    <p className="total-post">235 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img
                      src="img/home_support/rc10.png"
                      alt="communinity-box"
                    />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">Integrate Quickly</Link>
                    </h3>
                    <p className="total-post">542 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img
                      src="img/home_support/rc12.png"
                      alt="communinity-box"
                    />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">Integrate Quickly</Link>
                    </h3>
                    <p className="total-post">542 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img
                      src="img/home_support/rc13.png"
                      alt="communinity-box"
                    />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">Go Global</Link>
                    </h3>
                    <p className="total-post">542 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img
                      src="img/home_support/rc14.png"
                      alt="communinity-box"
                    />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="">Customize</Link>
                    </h3>
                    <p className="total-post">542 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}

                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img
                      src="img/home_support/rc15.png"
                      alt="communinity-box"
                    />
                  </div>
                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">From Commissions</Link>
                    </h3>
                    <p className="total-post">542 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}
                <div className="kbDoc-com-box">
                  <div className="icon-container">
                    <img
                      src="img/home_support/rc16.png"
                      alt="communinity-box"
                    />
                  </div>

                  <div className="kbDoc-com-box-content">
                    <h3 className="title">
                      <Link href="/forums">Service Based</Link>
                    </h3>
                    <p className="total-post">542 Posts</p>
                  </div>
                  {/* /.kbDoc-com-box-content --> */}
                </div>
                {/* /.kbDoc-com-box --> */}
              </div>
              {/* /.communities-boxes --> */}
            </div>
            {/* /.collapse-wrap --> */}
          </div>
          {/* /.more-communities --> */}
        </div>
        {/* /.container --> */}
      </section>
      {/* /.related-communities --> */}

      <section className="status-chart">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="h_title wow fadeInUp">How useful was KbDoc?</h2>
            <p className="wow fadeInUp" data-wow-delay="0.3s">
              Twit gormless barney pardon me vagabond cup of char morish cheeky
              what a load of rubbish, the bee's knees bog.!
            </p>
          </div>

          <div className="kbDoc-chart-wrapper">
            <ul className="chart-info">
              <li className="info-left-top color-one">
                <div className="counterup">
                  <span className="counter">75</span>
                  <span>%</span>
                </div>
                <div className="border-image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="370"
                    height="61"
                    viewBox="0 0 370 61"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(66, 218, 191)"
                      d="M319.500,1.423 L370.005,60.139 L369.200,60.721 L318.689,2.000 L-0.000,2.000 L-0.000,1.000 L318.497,1.000 L318.891,0.715 L319.136,1.000 L319.500,1.000 L319.500,1.423 Z"
                    />
                  </svg>
                </div>
                <p>90 Out of 205 issues resolved in last tow months</p>
              </li>
              <li className="info-right-top color-two">
                <div className="counterup">
                  <span className="counter">22</span>
                  <span>%</span>
                </div>
                <div className="border-image">
                  {/* <img src="img/home_support/brt.png" alt="chart"> --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="330px"
                    height="60px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(249, 50, 122)"
                      d="M330.000,1.281 L51.455,1.281 L0.802,60.002 L-0.005,59.421 L50.656,0.689 L50.656,0.281 L51.008,0.281 L51.253,-0.003 L51.648,0.281 L330.000,0.281 L330.000,1.281 Z"
                    />
                  </svg>
                </div>
                <p>35 out of 205 issues unanswered</p>
              </li>
              <li className="info-left-bottom color-three">
                <div className="counterup">
                  <span className="counter">44</span>
                  <span>%</span>
                </div>
                <div className="border-image">
                  {/* <img src="img/home_support/blb.png" alt="chart"> --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="350px"
                    height="60px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(53, 186, 233)"
                      d="M350.005,0.578 L299.344,59.310 L299.344,59.718 L298.992,59.718 L298.747,60.002 L298.353,59.718 L-0.000,59.718 L-0.000,58.719 L298.544,58.719 L349.198,-0.003 L350.005,0.578 Z"
                    />
                  </svg>
                </div>
                <p>20 Out of 205 issues haven't got a reply</p>
              </li>
              <li className="info-right-bottom color-four">
                <div className="counterup">
                  <span className="counter">35</span>
                  <span>%</span>
                </div>
                <div className="border-image">
                  {/* <img src="img/home_support/brb.png" alt="chart"> --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="390px"
                    height="60px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(252, 193, 3)"
                      d="M390.000,59.719 L51.647,59.719 L51.253,60.002 L51.008,59.719 L50.656,59.719 L50.656,59.310 L-0.005,0.579 L0.802,-0.004 L51.456,58.719 L390.000,58.719 L390.000,59.719 Z"
                    />
                  </svg>
                </div>
                <p>We are working on 42 out of 205 issues</p>
              </li>
            </ul>

            <div className="canvas">
              <canvas id="kbDoc-chart"></canvas>
            </div>
            {/* /.canvas --> */}

            <div className="full-amount">
              <h3 className="total-count">
                <span className="counter">100</span>
                <span>%</span>
              </h3>
            </div>
          </div>
          {/* /.kbDoc-chart-wrapper --> */}
        </div>
        {/* /.container --> */}
      </section>
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
            <h2 className="h_title wow fadeInUp">
              Over 1200+
              <br />
              completed work & Still counting.
            </h2>
          </div>

          <div className="funfact-boxes">
            <div
              className="funfact-box text-center color-one wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="fanfact-icon">
                <img src="img/home_support/fun-fact-1.png" alt="funfact" />
              </div>
              <div className="counter">
                <CountUp start={0} end={842} />
              </div>
              <h3 className="title">Users</h3>
            </div>
            {/* /.funfact-box --> */}

            <div
              className="funfact-box text-center color-two wow fadeInRight"
              data-wow-delay="0.5s"
            >
              <div className="fanfact-icon">
                <img src="img/home_support/fun-fact-2.png" alt="funfact" />
              </div>
              <div className="counter">
                <CountUp start={0} end={1023} />
              </div>
              <h3 className="title">Topics</h3>
            </div>
            {/* /.funfact-box text-center --> */}

            <div
              className="funfact-box text-center color-three wow fadeInRight"
              data-wow-delay="0.7s"
            >
              <div className="fanfact-icon">
                <img src="img/home_support/fun-fact-3.png" alt="funfact" />
              </div>
              <div className="counter">
                <CountUp start={0} end={196} />
              </div>
              <h3 className="title">Forums</h3>
            </div>
            {/* /.funfact-box text-center --> */}

            <div
              className="funfact-box text-center color-four wow fadeInRight"
              data-wow-delay="0.9s"
            >
              <div className="fanfact-icon">
                <img src="img/home_support/fun-fact-4.png" alt="funfact" />
              </div>
              <div className="counter">
                <CountUp start={0} end={650} />
              </div>
              <h3 className="title">Replies</h3>
            </div>
            {/* /.funfact-box text-center --> */}

            <div
              className="funfact-box text-center color-five wow fadeInRight"
              data-wow-delay="1.1s"
            >
              <div className="fanfact-icon">
                <img src="img/home_support/fun-fact-5.png" alt="funfact" />
              </div>
              <div className="counter">
                <CountUp start={0} end={364} />
              </div>
              <h3 className="title">Tags</h3>
            </div>
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
            <h2 className="h_title wow fadeInUp">KbDoc top community posts</h2>

            <p className="wow fadeInUp" data-wow-delay="0.3s">
              Me old mucker chimney pot bodge so I said Oxford my lady show off
              show off pick your nose and blow off cack cheesed.!
            </p>
          </div>

          <div className="community-posts-wrapper">
            <div className="community-post wow fadeInUp" data-wow-delay="0.5s">
              <div className="post-content">
                <div className="author-avatar">
                  <img src="img/home_support/cp1.png" alt="community post" />
                </div>
                <div className="entry-content">
                  <h3 className="post-title">
                    <Link href="/forum-single">
                      Con no longer save outlook emails to KbDoc
                    </Link>
                  </h3>
                  <p>updated by: robynphd 2 days ago</p>
                </div>
              </div>
              <div className="post-meta-wrapper">
                <ul className="post-meta-info">
                  <li>
                    <Link href="">
                      <i className="fas fa-eye"></i>478
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_chat_alt"></i>20
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_like_alt"></i>5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.community-post --> */}

            <div className="community-post wow fadeInUp" data-wow-delay="0.6s">
              <div className="post-content">
                <div className="author-avatar">
                  <img src="img/home_support/cp2.jpg" alt="community post" />
                </div>
                <div className="entry-content">
                  <h3 className="post-title">
                    <Link href="/forum-single">Connection timeouts</Link>
                  </h3>
                  <p>updated by: Hilary ouse 11 days ago</p>
                </div>
              </div>
              <div className="post-meta-wrapper">
                <ul className="post-meta-info">
                  <li>
                    <Link href="">
                      <i className="fas fa-eye"></i>478
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_chat_alt"></i>20
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_like_alt"></i>5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.community-post --> */}

            <div className="community-post wow fadeInUp" data-wow-delay="0.7s">
              <div className="post-content">
                <div className="author-avatar">
                  <img src="img/home_support/cp3.jpg" alt="community post" />
                </div>
                <div className="entry-content">
                  <h3 className="post-title">
                    <Link href="/forum-single">KbDoc full (need help)</Link>
                  </h3>
                  <p>updated by: Weir doe 3 days ago</p>
                </div>
              </div>
              <div className="post-meta-wrapper">
                <ul className="post-meta-info">
                  <li>
                    <Link href="">
                      <i className="fas fa-eye"></i>478
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_chat_alt"></i>20
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_like_alt"></i>5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.community-post --> */}

            <div className="community-post wow fadeInUp" data-wow-delay="0.8s">
              <div className="post-content">
                <div className="author-avatar">
                  <img src="img/home_support/cp4.jpg" alt="community post" />
                </div>
                <div className="entry-content">
                  <h3 className="post-title">
                    <Link href="/forum-single">
                      Syncing is stuck on a mac .What could be the culprit herh
                    </Link>
                  </h3>
                  <p>updated by: Jake weary 5 days ago</p>
                </div>
              </div>
              <div className="post-meta-wrapper">
                <ul className="post-meta-info">
                  <li>
                    <Link href="">
                      <i className="fas fa-eye"></i>478
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_chat_alt"></i>20
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_like_alt"></i>5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.community-post --> */}

            <div className="community-post wow fadeInUp" data-wow-delay="1s">
              <div className="post-content">
                <div className="author-avatar">
                  <img src="img/home_support/cp5.jpg" alt="community post" />
                </div>
                <div className="entry-content">
                  <h3 className="post-title">
                    <Link href="/forum-single">
                      KbDoc application keeps crashing at starting mojave
                      10.14.6
                    </Link>
                  </h3>
                  <p>updated by: Jason response 2 days ago</p>
                </div>
              </div>
              <div className="post-meta-wrapper">
                <ul className="post-meta-info">
                  <li>
                    <Link href="">
                      <i className="fas fa-eye"></i>478
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_chat_alt"></i>20
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_like_alt"></i>5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.community-post --> */}

            <div className="community-post wow fadeInUp" data-wow-delay="1.1s">
              <div className="post-content">
                <div className="author-avatar">
                  <img src="img/home_support/cp6.jpg" alt="community post" />
                </div>
                <div className="entry-content">
                  <h3 className="post-title">
                    <Link href="/forum-single">Customizing Certificates</Link>
                  </h3>
                  <p>updated by: Miles tone 7 days ago</p>
                </div>
              </div>
              <div className="post-meta-wrapper">
                <ul className="post-meta-info">
                  <li>
                    <Link href="">
                      <i className="fas fa-eye"></i>478
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_chat_alt"></i>20
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i className="icon_like_alt"></i>5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.community-post --> */}
          </div>
          {/* /.community-posts-wrapper --> */}

          <div className="button-container text-center">
            <Link
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
            </Link>
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
                <div className="quote wow fadeIn">
                  <img src="img/home_support/quote-top.png" alt="quote" />
                </div>
                <h2
                  className="journalism-title wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  KbDoc cares deeply
                  <br />
                  about journalism.
                </h2>

                <p className="description wow fadeInUp" data-wow-delay="0.5s">
                  Cheeky why my good sir nancy boy off his nut at public school
                  excuse my French well bog bugger porkies, eaton he legged it
                  owt to do with me gutted.!
                </p>

                <div
                  className="journalism-info wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h3 className="name">Chaplain Mondover</h3>
                  <span className="designation">CEO, KbDoc</span>
                </div>

                <div className="quote dmt-4 wow fadeIn" data-wow-delay="1s">
                  <img src="img/home_support/quote-bottom.png" alt="quote" />
                </div>
              </div>
              {/* /.journalism-content-wrapper --> */}
            </div>
            {/* /.col-md-6 --> */}

            <div className="col-lg-5">
              <div
                className="journalism-feature-image wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img src="img/home_support/journalism.png" alt="journalism" />
              </div>
              {/* /.journalism-feature-image --> */}
            </div>
            {/* /.col-md-6 --> */}
          </div>
          {/* /.row --> */}
        </div>
        {/* /.container --> */}

        <div className="light-header">
          <h2 className="title-light wow fadeInDown" data-wow-delay="0.4s">
            OUR COMMITMENT
          </h2>
        </div>
      </section>
      {/* /.about-journalism --> */}

      <section className="communities">
        <div className="container">
          <div className="section_title title-img text-center">
            <img src="img/home_support/com_sm.png" alt="community" />

            <h2 className="title-lg wow fadeInUp">New to Communities?</h2>

            <Link
              href=""
              className="action_btn wow fadeInUp"
              data-wow-delay="0.3s"
            >
              Join the community <i className="arrow_right"></i>
            </Link>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="community-box wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-container">
                  <img src="img/home_support/com_1.png" alt="community" />
                </div>
                <div className="community-content">
                  <h3 className="com-title">
                    Find answers and ask new questions
                  </h3>
                  <Link href="" className="details-link">
                    How to Search Communities <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              {/* /.communinity-box --> */}
            </div>
            {/* /.col-lg-4 col-md-6 --> */}

            <div className="col-lg-4 col-md-6">
              <div className="community-box wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-container">
                  <img src="img/home_support/com_2.png" alt="community" />
                </div>
                <div className="community-content">
                  <h3 className="com-title">
                    Manage the people and discussions you follow
                  </h3>
                  <Link href="" className="details-link">
                    How to Search Communities <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              {/* /.communinity-box --> */}
            </div>
            {/* /.col-lg-4 col-md-6 --> */}

            <div className="col-lg-4 col-md-6">
              <div className="community-box wow fadeInUp" data-wow-delay="0.8s">
                <div className="icon-container">
                  <img src="img/home_support/com_3.png" alt="community" />
                </div>
                <div className="community-content">
                  <h3 className="com-title">
                    Award points, level up, and earn new privileges
                  </h3>
                  <Link href="" className="details-link">
                    How to Search Communities <i className="arrow_right"></i>
                  </Link>
                </div>
              </div>
              {/* /.communinity-box --> */}
            </div>
            {/* /.col-md-4 --> */}
          </div>
          {/* /.row --> */}
        </div>
        {/* /.container --> */}
      </section>
    </DefaultLayout>
  );
}
