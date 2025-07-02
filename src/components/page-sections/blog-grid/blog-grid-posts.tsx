import Link from "next/link";

const BlogGridPosts = () => {
  return (
    <>
      <section className="doc_blog_grid_area">
        <div className="blog_grid_inner bg_color">
          <div className="container">
            <ul className="nav blog_tab">
              <li className="nav-item">
                <Link className="nav-link active" href="#">
                  Updates
                </Link>
              </li>
              <li className="nav-item cat-woocommerce">
                <Link className="nav-link" href="#">
                  WooCommerce
                </Link>
              </li>
              <li className="nav-item cat-startups">
                <Link className="nav-link" href="#">
                  Startups
                </Link>
              </li>
              <li className="nav-item cat-laravel">
                <Link className="nav-link" href="#">
                  Laravel
                </Link>
              </li>
              <li className="nav-item cat-wordpress">
                <Link className="nav-link" href="#">
                  WordPress
                </Link>
              </li>
              <li className="nav-item cat-megento">
                <Link className="nav-link" href="#">
                  Megento
                </Link>
              </li>
              <li className="nav-item cat-startups">
                <Link className="nav-link" href="#">
                  Startups
                </Link>
              </li>
              <li className="nav-item cat-KbDoc">
                <Link className="nav-link" href="#">
                  KbDoc
                </Link>
              </li>
              <li className="nav-item cat-others">
                <Link className="nav-link" href="#">
                  Others
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row blog_grid_tab">
            <div className="col-lg-4 col-sm-6">
              <div className="blog_grid_post wow fadeInUp">
                <img src="img/blog-grid/blog_grid_post1.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">18 Min Read</Link>
                    <Link className="c_blue" href="#">
                      WordPress
                    </Link>
                  </div>
                  <Link href="blog-single.html">
                    <h4 className="b_title">
                      Is Your Store Safe From Magento Killer?
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
                <img src="img/blog-grid/blog_grid_post2.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">18 Min Read</Link>
                    <Link className="cat-KbDoc orange" href="#">
                      KbDoc
                    </Link>
                  </div>
                  <Link href="blog-single.html">
                    <h4 className="b_title">
                      70 Best Startups You Need to Watch Out for
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
                <img src="img/blog-grid/blog_grid_post3.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">10 Min Read</Link>
                    <Link className="cat-laravel green" href="#">
                      Laravel
                    </Link>
                  </div>
                  <Link href="blog-single.html">
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
            <div className="col-lg-4 col-sm-6">
              <div
                className="blog_grid_post wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img src="img/blog-grid/blog_grid_post4.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">18 Min Read</Link>
                    <Link className="cat-woocommerce" href="#">
                      WooCommerce
                    </Link>
                  </div>
                  <Link href="blog-single.html">
                    <h4 className="b_title">
                      How to Use Forms for Enhancing UX In WordPress
                    </h4>
                  </Link>
                  <p>
                    The pressure to keep our skills sharp is constant. Mastering
                    new skills may...
                  </p>
                  <div className="media post_author">
                    <div className="round_img">
                      <img src="img/blog-grid/author_4.jpg" alt="" />
                    </div>
                    <div className="media-body author_text">
                      <h4>Indigo Violet</h4>
                      <div className="date">March 23, 2020</div>
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
                <img src="img/blog-grid/blog_grid_post5.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">10 Min Read</Link>
                    <Link className="cat-link cat-megento" href="#">
                      Megento
                    </Link>
                  </div>
                  <Link href="blog-single.html">
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
                      <img src="img/blog-grid/author_5.jpg" alt="" />
                    </div>
                    <div className="media-body author_text">
                      <h4>Niles Peppertrout</h4>
                      <div className="date">Oct 12, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div
                className="blog_grid_post wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img src="img/blog-grid/blog_grid_post6.jpg" alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="blog-single.html">14 Min Read</Link>
                    <Link className="cat-laravel" href="#">
                      Laravel
                    </Link>
                  </div>
                  <Link href="#">
                    <h4 className="b_title">
                      The Grand Ecommerce Giveaway Worth
                    </h4>
                  </Link>
                  <p>
                    The pressure to keep our skills sharp is constant. Mastering
                    new skills may...
                  </p>
                  <div className="media post_author">
                    <div className="round_img">
                      <img src="img/blog-grid/author_6.jpg" alt="" />
                    </div>
                    <div className="media-body author_text">
                      <h4>Hanson Deck</h4>
                      <div className="date">Sep 17, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridPosts;
