"use client";
import type { BlogGridPost } from "@/types/blog-grid";
import Link from "next/link";
import { useState } from "react";
import { blogCategories, BlogData } from "./blog-data";

const BlogGridPosts = () => {
  // State to keep track of the currently selected category filter
  const [activeCategory, setActiveCategory] = useState("Updates");

  // Filter posts based on the active category.
  // "Updates" shows all posts.
  // Otherwise, show posts that include the active category in their 'categories' array.
  const filteredPosts: BlogGridPost[] =
    activeCategory === "Updates"
      ? BlogData
      : BlogData.filter((post) => post.categories.includes(activeCategory));

  return (
    <>
      <section className="doc_blog_grid_area">
        <div className="blog_grid_inner bg_color">
          <div className="container">
            <ul className="nav blog_tab">
              {blogCategories.map((category) => (
                <li className="nav-item" key={category}>
                  <a
                    className={`nav-link ${
                      activeCategory === category ? "active" : ""
                    }`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(category);
                    }}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row blog_grid_tab">
            {/* Dynamically generate blog post cards */}
            {filteredPosts.map((post: BlogGridPost, index: number) => (
              <div className="col-lg-4 col-sm-6" key={post.id}>
                <div
                  className="blog_grid_post wow fadeInUp"
                  style={{
                    visibility: "visible",
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <img src={post.image} alt={`Image for ${post.title}`} />
                  <div className="grid_post_content">
                    <div className="post_tag">
                      <a href="#">{post.readTime}</a>
                      <a href="#">{post.categories[0]}</a>
                    </div>
                    <Link href="/blog-single">
                      <h4 className="b_title">{post.title}</h4>
                    </Link>
                    <p>{post.excerpt}</p>
                    <div className="media post_author">
                      <div className="round_img">
                        <img
                          src={post.author.avatar}
                          alt={`Author ${post.author.name} `}
                        />
                      </div>
                      <div className="media-body author_text">
                        <h4>{post.author.name}</h4>
                        <div className="date">{post.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridPosts;
