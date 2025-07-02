import Link from "next/link";

const BlogGridTopPost = () => {
  return (
    <>
      <section className="blog_top_post_area sec_pad bg_color">
        <div className="container">
          <div className="row blog_top_post flex-row-reverse">
            <div className="col-lg-7 p_top_img">
              <img className="p_img" src="img/blog-grid/top_post.jpg" alt="" />
            </div>
            <div className="col-lg-5 p-0">
              <div className="b_top_post_content">
                <div className="post_tag">
                  <Link href="#">9 Min Read</Link>
                  <Link className="c_blue" href="#">
                    WordPress
                  </Link>
                </div>
                <Link href="#">
                  <h3>10 WordPress Security Issues And How to Fix Them</h3>
                </Link>
                <p>
                  Tinkety tonk old fruit bodge on your bike mate car boot my
                  good sir jolly good such a fibber up the kyver golly gosh
                  David, naff chap.!
                </p>
                <Link href="#" className="learn_btn">
                  Continue Reading
                  <i className="arrow_right" />
                </Link>
                <div className="media post_author">
                  <div className="round_img">
                    <img src="img/blog-grid/ansley.jpg" alt="" />
                  </div>
                  <div className="media-body author_text">
                    <h4>Jason Response</h4>
                    <div className="date">Sep 14, 2020</div>
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

export default BlogGridTopPost;
