import Link from "next/link";

const Blogs = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="blog_top_post blog_classic_item">
          <img src="img/blog-classic/classic_01.jpg" alt="" />
          <div className="b_top_post_content">
            <div className="post_tag">
              <Link href="#">Sep 14, 2020</Link>
              <Link href="#">9 Min Read</Link>
              <Link className="orange" href="#">
                KbDoc
              </Link>
            </div>
            <Link href="#">
              <h3>10 WordPress Security Issues And How to Fix Them</h3>
            </Link>
            <p>
              I don't want no agro such a fibber smashing bits and bobs posh
              blag cuppa brilliant brolly Eaton bobby, bite your arm off
              codswallop I excuse my French squiffy pukka gosh nancy boy
              buggered, bog-standard burke some dodgy chav.!
            </p>
            <div className="d-flex justify-content-between p_bottom">
              <Link href="#" className="learn_btn">
                Continue Reading
                <i className="arrow_right" />
              </Link>
              <div className="media post_author">
                <div className="round_img">
                  <img src="img/blog-grid/author_1.jpg" alt="" />
                </div>
                <div className="media-body author_text">
                  <Link href="#">
                    <h4>Jason Response</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <blockquote>
          <h4 className="c_head">
            He legged it that blatant brown bread some dodgy chav super a
            blinding shot my lady lavatory cup of char cor blimey guvnor get
            stuffed mate you mug cobblers off his nut pukka, give us a bell
          </h4>
          <Link href="#" className="author">
            Jason Response
          </Link>
        </blockquote>
        <div className="blog_top_post blog_classic_item">
          <div className="video_post">
            <img src="img/blog-classic/classic_02.jpg" alt="" />
            <Link
              className="popup-youtube video_icon"
              href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
            >
              <i className="arrow_triangle-right" />
            </Link>
          </div>
          <div className="b_top_post_content">
            <div className="post_tag">
              <Link href="#">Sep 14, 2020</Link>
              <Link href="#">9 Min Read</Link>
              <Link className="c_blue" href="#">
                KbDoc
              </Link>
            </div>
            <Link href="#">
              <h3>10 WordPress Security Issues And How to Fix Them</h3>
            </Link>
            <p>
              I don't want no agro such a fibber smashing bits and bobs posh
              blag cuppa brilliant brolly Eaton bobby, bite your arm off
              codswallop I excuse my French squiffy pukka gosh nancy boy
              buggered, bog-standard burke some dodgy chav.!
            </p>
            <div className="d-flex justify-content-between p_bottom">
              <Link href="#" className="learn_btn">
                Continue Reading
                <i className="arrow_right" />
              </Link>
              <div className="media post_author">
                <div className="round_img">
                  <img src="img/blog-grid/author_1.jpg" alt="" />
                </div>
                <div className="media-body author_text">
                  <Link href="#">
                    <h4>Jason Response</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_link_post">
          <Link href="#">
            <p>
              loo Oxford get stuffed mate bits and bobs barmy no biggie Richard
              Eaton are you taking the piss gosh, tomfoolery tosser.
            </p>
          </Link>
        </div>
        <div className="blog_top_post blog_classic_item">
          <img src="img/blog-classic/classic_03.jpg" alt="" />
          <div className="b_top_post_content">
            <div className="post_tag">
              <Link href="#">Dec 09, 2020</Link>
              <Link href="#">19 Min Read</Link>
              <Link className="orange" href="#">
                KbDoc
              </Link>
            </div>
            <Link href="#">
              <h3>Create A WordPress Multi Step Form With weForms</h3>
            </Link>
            <p>
              I don't want no agro such a fibber smashing bits and bobs posh
              blag cuppa brilliant brolly Eaton bobby, bite your arm off
              codswallop I excuse my French squiffy pukka gosh nancy boy
              buggered, bog-standard burke some dodgy chav.!
            </p>
            <div className="d-flex justify-content-between p_bottom">
              <Link href="#" className="learn_btn">
                Continue Reading
                <i className="arrow_right" />
              </Link>
              <div className="media post_author">
                <div className="round_img">
                  <img src="img/blog-grid/author_1.jpg" alt="" />
                </div>
                <div className="media-body author_text">
                  <Link href="#">
                    <h4>Jason Response</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_top_post blog_classic_item">
          <img src="img/blog-classic/classic_04.jpg" alt="" />
          <div className="b_top_post_content">
            <div className="post_tag">
              <Link href="#">Dec 09, 2020</Link>
              <Link href="#">9 Min Read</Link>
              <Link className="green" href="#">
                KbDoc
              </Link>
            </div>
            <Link href="#">
              <h3>Create Conditional Logic Forms &amp; Publish</h3>
            </Link>
            <p>
              I don't want no agro such a fibber smashing bits and bobs posh
              blag cuppa brilliant brolly Eaton bobby, bite your arm off
              codswallop I excuse my French squiffy pukka gosh nancy boy
              buggered, bog-standard burke some dodgy chav.!
            </p>
            <div className="d-flex justify-content-between p_bottom">
              <Link href="#" className="learn_btn">
                Continue Reading
                <i className="arrow_right" />
              </Link>
              <div className="media post_author">
                <div className="round_img">
                  <img src="img/blog-grid/author_1.jpg" alt="" />
                </div>
                <div className="media-body author_text">
                  <Link href="#">
                    <h4>Jason Response</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navigation pagination">
          <div className="nav-links">
            <span aria-current="page" className="page-numbers current">
              1
            </span>
            <Link className="page-numbers" href="#">
              2
            </Link>
            <Link className="next page-numbers" href="#">
              <i className="arrow_carrot-right" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Blogs;
