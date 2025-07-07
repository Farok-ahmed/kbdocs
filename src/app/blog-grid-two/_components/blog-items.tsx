import Link from "next/link";
import { getAllBlogPosts } from "../blogs";

const BlogItems = () => {
  const blogGridPosts = getAllBlogPosts();
  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          {blogGridPosts.map((post) => (
            <div key={post.id} className="col-lg-6 col-sm-6">
              <div className="blog_grid_post wow fadeInUp">
                <img src={post.image} alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <a href="#">{post.readTime}</a>
                    <a className="cat-woocommerce" href="#">
                      {post.category.name}
                    </a>
                  </div>
                  <Link href={`/blog-grid-two/${post.id}`}>
                    <h4 className="b_title">{post.title}</h4>
                  </Link>
                  <p>{post.excerpt}</p>
                  <div className="media post_author">
                    <div className="round_img">
                      <img src={post?.author?.avatar} alt="" />
                    </div>
                    <div className="media-body author_text">
                      <h4>{post?.author?.name}</h4>
                      <div className="date">{post.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12">
            <nav className="navigation pagination" role="navigation">
              <div className="nav-links">
                <span aria-current="page" className="page-numbers current">
                  1
                </span>
                <a className="page-numbers" href="#">
                  2
                </a>
                <a className="next page-numbers" href="#">
                  <i className="arrow_carrot-right" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItems;
