import Link from "next/link";

const BlogGridPostsTwo = () => {
  return (
    <>
      <section className="doc_blog_grid_area_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="blog_grid_post wow fadeInUp">
                <img src="img/blog-grid/blog_grid_post7.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">18 Min Read</Link>
                    <Link className="c_blue" href="#">
                      WordPress
                    </Link>
                  </div>
                  <Link href="#">
                    <h4 className="b_title">
                      Create A WordPress Multi Step Form With weForms
                    </h4>
                  </Link>
                  <p>
                    The pressure to keep our skills sharp is constant. Mastering
                    new skills may...
                  </p>
                  <div className="media post_author">
                    <div className="round_img">
                      <img src="img/blog-grid/author_1.jpg" alt="" />
                    </div>
                    <div className="media-body author_text">
                      <h4>Jason Response</h4>
                      <div className="date">Sep 14, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="blog_grid_post wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img src="img/blog-grid/blog_grid_post8.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">18 Min Read</Link>
                    <Link className="orange" href="#">
                      KbDoc
                    </Link>
                  </div>
                  <Link href="#">
                    <h4 className="b_title">
                      How to Create GDPR Consent Form In WordPress
                    </h4>
                  </Link>
                  <p>
                    The pressure to keep our skills sharp is constant. Mastering
                    new skills may...
                  </p>
                  <div className="media post_author">
                    <div className="round_img">
                      <img src="img/blog-grid/author_2.jpg" alt="" />
                    </div>
                    <div className="media-body author_text">
                      <h4>Druid Wensleydale</h4>
                      <div className="date">Sep 14, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="blog_grid_post wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <img src="img/blog-grid/blog_grid_post9.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">10 Min Read</Link>
                    <Link className="cat-laravel" href="#">
                      Laravel
                    </Link>
                  </div>
                  <Link href="#">
                    <h4 className="b_title">
                      Create Conditional Logic Forms &amp; Publish
                    </h4>
                  </Link>
                  <p>
                    The pressure to keep our skills sharp is constant. Mastering
                    new skills may...
                  </p>
                  <div className="media post_author">
                    <div className="round_img">
                      <img src="img/blog-grid/author_3.jpg" alt="" />
                    </div>
                    <div className="media-body author_text">
                      <h4>Douglas Lyphe</h4>
                      <div className="date">Nov 10, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-12 text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <Link href="#" className="doc_border_btn all_doc_btn">
                Load More
                <i className="arrow_right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridPostsTwo;
