"use client";
import { useBlogPagination } from "@/hooks/useBlogPagination";
import Link from "next/link";
import { getAllBlogPosts } from "../blogs";
const POSTS_PER_PAGE: number = 8;
const BlogItems = () => {
  const blogGridPosts = getAllBlogPosts();
  const {
    currentPage,
    totalPages,
    currentItems: paginatedPosts,
    handlePageClick,
  } = useBlogPagination({
    items: blogGridPosts,
    itemsPerPage: POSTS_PER_PAGE,
  });
  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          {paginatedPosts.map((post) => (
            <div key={post.id} className="col-lg-6 col-sm-6">
              <div className="blog_grid_post wow fadeInUp">
                <img src={post.image} alt="" />
                <div className="grid_post_content">
                  <div className="post_tag">
                    <Link href="#">{post.readTime}</Link>
                    <Link className="cat-woocommerce" href="#">
                      {post.category.name}
                    </Link>
                  </div>
                  <Link href={`/blog-single`}>
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
            <nav className="navigation pagination">
              <div className="nav-links">
                {/* ⏪ Previous Page Button */}
                {currentPage > 1 && (
                  <Link
                    className="prev page-numbers"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(currentPage - 1);
                    }}
                  >
                    <i className="arrow_carrot-left" />
                  </Link>
                )}

                {/* Page Number Links */}
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  if (page === currentPage) {
                    return (
                      <span
                        key={page}
                        aria-current="page"
                        className="page-numbers current"
                      >
                        {page}
                      </span>
                    );
                  } else {
                    return (
                      <Link
                        key={page}
                        className="page-numbers"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageClick(page);
                        }}
                      >
                        {page}
                      </Link>
                    );
                  }
                })}

                {/* ⏩ Next Page Button */}
                {currentPage < totalPages && (
                  <Link
                    className="next page-numbers"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageClick(currentPage + 1);
                    }}
                  >
                    <i className="arrow_carrot-right" />
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItems;
