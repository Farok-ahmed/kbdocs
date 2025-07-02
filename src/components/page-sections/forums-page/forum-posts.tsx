import Link from "next/link";

const ForumPosts = () => {
  return (
    <>
      <div className="community-posts-wrapper bb-radius">
        {/* <!-- Forum Item --> */}
        <div className="community-post style-two forum-item bug">
          <div className="col-md-6 post-content">
            <div className="author-avatar forum-icon">
              <img src="img/home_support/rc1.png" alt="community post" />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-topics.html">Announcements</Link>
              </h3>
              <p>This forum is a special forum for general announcements.</p>
            </div>
          </div>
          <div className="col-md-6 post-meta-wrapper">
            <ul className="forum-titles">
              <li className="forum-topic-count">10</li>
              <li className="forum-reply-count">105</li>
              <li className="forum-freshness">
                <div className="freshness-box">
                  <div className="freshness-top">
                    <div className="freshness-link">
                      <Link
                        href="#"
                        title="Reply To: Main Forum Rules &amp; Policies"
                      >
                        2 years, 2 months ago
                      </Link>
                    </div>
                  </div>
                  <div className="freshness-btm">
                    <Link
                      href="#"
                      title="View Eh Jewel's profile"
                      className="bbp-author-link"
                    >
                      <div className="freshness-name">
                        <span className="bbp-author-name">Eh Jewel</span>
                      </div>
                      <span className="bbp-author-avatar">
                        <img
                          alt="Eh Jewel"
                          src="img/home_support/cp5.jpg"
                          className="avatar photo"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.forum-item  -->

                            <!-- Forum Item --> */}
        <div className="community-post style-two forum-item bug">
          <div className="col-md-6 post-content">
            <div className="author-avatar forum-icon">
              <img src="img/home_support/rc2.png" alt="community post" />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-topics.html">Technology</Link>
              </h3>
              <p>Latest technology news and updates from our community.</p>
            </div>
          </div>
          <div className="col-md-6 post-meta-wrapper">
            <ul className="forum-titles">
              <li className="forum-topic-count">20</li>
              <li className="forum-reply-count">305</li>
              <li className="forum-freshness">
                <div className="freshness-box">
                  <div className="freshness-top">
                    <div className="freshness-link">
                      <Link
                        href="#"
                        title="Reply To: Main Forum Rules &amp; Policies"
                      >
                        2 years, 2 months ago
                      </Link>
                    </div>
                  </div>
                  <div className="freshness-btm">
                    <Link
                      href="#"
                      title="View Eh Jewel's profile"
                      className="bbp-author-link"
                    >
                      <div className="freshness-name">
                        <span className="bbp-author-name">Eh Jewel</span>
                      </div>
                      <span className="bbp-author-avatar">
                        <img
                          alt="Eh Jewel"
                          src="img/home_support/cp6.jpg"
                          className="avatar photo"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.forum-item  -->

                            <!-- Forum Item --> */}
        <div className="community-post style-two forum-item bug">
          <div className="col-md-6 post-content">
            <div className="author-avatar forum-icon">
              <img src="img/home_support/rc8.png" alt="community post" />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-topics.html">TV & Movies</Link>
              </h3>
              <p>
                Use this forum to share your opinion about films and TV Shows.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 post-meta-wrapper">
            <ul className="forum-titles">
              <li className="forum-topic-count">30</li>
              <li className="forum-reply-count">156</li>
              <li className="forum-freshness">
                <div className="freshness-box">
                  <div className="freshness-top">
                    <div className="freshness-link">
                      <Link
                        href="#"
                        title="Reply To: Main Forum Rules &amp; Policies"
                      >
                        2 years, 2 months ago
                      </Link>
                    </div>
                  </div>
                  <div className="freshness-btm">
                    <Link
                      href="#"
                      title="View Eh Jewel's profile"
                      className="bbp-author-link"
                    >
                      <div className="freshness-name">
                        <span className="bbp-author-name">Kyle Jonson</span>
                      </div>
                      <span className="bbp-author-avatar">
                        <img
                          alt="Eh Jewel"
                          src="img/home_support/cp7.png"
                          className="avatar photo"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.forum-item  -->

                            <!-- Forum Item --> */}
        <div className="community-post style-two forum-item bug">
          <div className="col-md-6 post-content">
            <div className="author-avatar forum-icon">
              <img src="img/home_support/rc3.png" alt="community post" />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-topics.html">KbDoc Support</Link>
              </h3>
              <p>
                Get support for KbDoc knowledge-base and documentation template.
              </p>
            </div>
          </div>
          <div className="col-md-6 post-meta-wrapper">
            <ul className="forum-titles">
              <li className="forum-topic-count">99</li>
              <li className="forum-reply-count">405</li>
              <li className="forum-freshness">
                <div className="freshness-box">
                  <div className="freshness-top">
                    <div className="freshness-link">
                      <Link
                        href="#"
                        title="Reply To: Main Forum Rules &amp; Policies"
                      >
                        1 years, 2 months ago
                      </Link>
                    </div>
                  </div>
                  <div className="freshness-btm">
                    <Link
                      href="#"
                      title="View Eh Jewel's profile"
                      className="bbp-author-link"
                    >
                      <div className="freshness-name">
                        <span className="bbp-author-name">Giles Posture</span>
                      </div>
                      <span className="bbp-author-avatar">
                        <img
                          alt="Eh Jewel"
                          src="img/home_support/cp10.png"
                          className="avatar photo"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.forum-item  -->

                            <!-- Forum Item --> */}
        <div className="community-post style-two forum-item bug">
          <div className="col-md-6 post-content">
            <div className="author-avatar forum-icon">
              <img src="img/home_support/rc13.png" alt="community post" />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-topics.html">Marketplaces</Link>
              </h3>
              <p>This forum is a special forum for marketplace support.</p>
            </div>
          </div>
          <div className="col-md-6 post-meta-wrapper">
            <ul className="forum-titles">
              <li className="forum-topic-count">50</li>
              <li className="forum-reply-count">215</li>
              <li className="forum-freshness">
                <div className="freshness-box">
                  <div className="freshness-top">
                    <div className="freshness-link">
                      <Link
                        href="#"
                        title="Reply To: Main Forum Rules &amp; Policies"
                      >
                        1 years, 3 months ago
                      </Link>
                    </div>
                  </div>
                  <div className="freshness-btm">
                    <Link
                      href="#"
                      title="View Eh Jewel's profile"
                      className="bbp-author-link"
                    >
                      <div className="freshness-name">
                        <span className="bbp-author-name">Eh Jewel</span>
                      </div>
                      <span className="bbp-author-avatar">
                        <img
                          alt="Eh Jewel"
                          src="img/home_support/cp5.jpg"
                          className="avatar photo"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.forum-item  --> */}
      </div>
    </>
  );
};

export default ForumPosts;
