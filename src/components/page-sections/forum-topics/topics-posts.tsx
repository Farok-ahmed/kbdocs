import cmm1 from "@/assets/img/home_support/cmm1.png";
import cmm10 from "@/assets/img/home_support/cmm10.png";
import cmm11 from "@/assets/img/home_support/cmm11.png";
import cmm2 from "@/assets/img/home_support/cmm2.png";
import cmm3 from "@/assets/img/home_support/cmm3.png";
import cmm4 from "@/assets/img/home_support/cmm4.png";
import cmm5 from "@/assets/img/home_support/cmm5.png";
import cmm6 from "@/assets/img/home_support/cmm6.png";
import cmm7 from "@/assets/img/home_support/cmm7.png";
import cmm8 from "@/assets/img/home_support/cmm8.png";
import cmm9 from "@/assets/img/home_support/cmm9.png";
import cp1 from "@/assets/img/home_support/cp1.png";
import cp10 from "@/assets/img/home_support/cp10.png";
import cp2 from "@/assets/img/home_support/cp2.jpg";
import cp3 from "@/assets/img/home_support/cp3.jpg";
import cp4 from "@/assets/img/home_support/cp4.jpg";
import cp5 from "@/assets/img/home_support/cp5.jpg";
import cp6 from "@/assets/img/home_support/cp6.jpg";
import cp7 from "@/assets/img/home_support/cp7.png";
import cp8 from "@/assets/img/home_support/cp8.png";
import cp9 from "@/assets/img/home_support/cp9.png";
import Image from "next/image";
import Link from "next/link";

const TopicsPosts = () => {
  return (
    <>
      <div className="community-posts-wrapper bb-radius">
        <div className="community-post style-two kbDoc richard bug">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp2}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="/forum-single">Workspace/Org Administration</Link>
              </h3>
              <ul className="meta">
                <li>
                  <Image src={cmm1} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 3 days ago
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}

        <div className="community-post style-two improvement kbDoc open druid">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp1}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">Course do not display properly</Link>{" "}
              </h3>
              <div className="cat-wrap">
                <Link className="badge" href="#">
                  Docbuzz
                </Link>
              </div>
              <span className="com-featured">
                <i className="icon_check"></i>
              </span>
              <ul className="meta">
                <li>
                  <Image src={cmm2} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 5 days ago
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post style-two --> */}

        <div className="community-post style-two css feature improvement weir">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp3}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">
                  How to add a different logo image to the NON Sticky header?
                </Link>
              </h3>
              <ul className="meta">
                <li>
                  <Image src={cmm3} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 4 days ago
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post style-two --> */}

        <div className="community-post style-two feature kbDoc spider richard">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp4}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">
                  Sticky navbar is shown, but state is inactive
                </Link>
              </h3>
              <div className="cat-wrap">
                <Link className="badge color-yellow" href="#">
                  Improvement !
                </Link>
                <Link className="badge color-ass" href="#">
                  CSS
                </Link>
              </div>
              <ul className="meta">
                <li>
                  <Image src={cmm4} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 4 days ago
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post style-two --> */}

        <div className="community-post style-two spider open weir">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp5}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">
                  Performance issue uikit v3 and C3js
                </Link>
              </h3>
              <ul className="meta">
                <li>
                  <Image src={cmm5} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 5 days ago
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post style-two --> */}

        <div className="community-post style-two bug feature doc open druid dylan">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp6}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">Course do not display properly</Link>
              </h3>
              <div className="cat-wrap">
                <Link className="badge color-green" href="#">
                  Feature
                </Link>
              </div>
              <ul className="meta">
                <li>
                  <Image src={cmm6} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 6 days agoe
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}

        <div className="community-post style-two spider doc open giles fletch">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp10}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">Apps/Integrations/APIs</Link>
              </h3>
              <ul className="meta">
                <li>
                  <Image src={cmm7} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 6 days agoe
                </li>
              </ul>
              <span className="com-featured">
                <i className="icon_check"></i>
              </span>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}

        <div className="community-post style-two kbDoc bug open dylan">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp7}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">Course do not display properly</Link>
              </h3>
              <div className="cat-wrap">
                <Link className="badge color-orange" href="#">
                  Spider theme
                </Link>
                <Link className="badge color-theme" href="#">
                  Open
                </Link>
              </div>
              <ul className="meta">
                <li>
                  <Image src={cmm8} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 6 days agoe
                </li>
              </ul>
            </div>
          </div>

          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}

        <div className="community-post style-two giles mann">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp8}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">
                  UK-form-custom / select / multiple{" "}
                </Link>
              </h3>
              <ul className="meta">
                <li>
                  <Image src={cmm9} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 6 days agoe
                </li>
              </ul>
            </div>
          </div>

          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}

        <div className="community-post style-two theodore fletch">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp9}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>

            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">
                  Change “courses” in URL permalink base
                </Link>
              </h3>
              <div className="cat-wrap">
                <Link className="badge color-pink" href="#">
                  Bug!
                </Link>
              </div>

              <ul className="meta">
                <li>
                  <Image src={cmm10} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 6 days ago
                </li>
              </ul>
            </div>
          </div>

          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}

        <div className="community-post style-two mann">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp2}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">
                  Disable animations for ui testing
                </Link>
              </h3>
              <ul className="meta">
                <li>
                  <Image src={cmm2} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 6 days agoe
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}

        <div className="community-post style-two theodore">
          <div className="post-content">
            <div className="author-avatar">
              <Image
                src={cp6}
                alt="community post"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="entry-content">
              <h3 className="post-title">
                <Link href="forum-single">Lightbox zoom on mobile device</Link>
              </h3>
              <div className="cat-wrap">
                <Link className="badge color-green" href="#">
                  Feature
                </Link>
              </div>
              <ul className="meta">
                <li>
                  <Image src={cmm11} alt="cmm" />
                  <Link href="#">WordPress Theme</Link>
                </li>
                <li>
                  <i className="icon_calendar"></i>updated 6 days agoe
                </li>
              </ul>
            </div>
          </div>
          <div className="post-meta-wrapper">
            <ul className="post-meta-info">
              <li>
                <Link href="#">
                  <i className="icon_chat_alt"></i>20
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="icon_star"></i>5
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.community-post --> */}
      </div>
    </>
  );
};

export default TopicsPosts;
