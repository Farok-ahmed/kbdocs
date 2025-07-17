"use client";
import { useBlogPagination } from "@/hooks/useBlogPagination";
import Link from "next/link";
import { MouseEvent, ReactElement } from "react";

// Define TypeScript interfaces
interface Author {
  name: string;
  image: string;
}

interface Category {
  name: string;
  className: string;
}

interface BaseBlogPost {
  id: number;
  type: "image" | "quote" | "video" | "link";
}

interface ImagePost extends BaseBlogPost {
  type: "image";
  image: string;
  date: string;
  readTime: string;
  category: Category;
  title: string;
  excerpt: string;
  author: Author;
}

interface QuotePost extends BaseBlogPost {
  type: "quote";
  quote: string;
  author: string;
}

interface VideoPost extends BaseBlogPost {
  type: "video";
  image: string;
  videoUrl: string;
  date: string;
  readTime: string;
  category: Category;
  title: string;
  excerpt: string;
  author: Author;
  url?: string;
}

interface LinkPost extends BaseBlogPost {
  type: "link";
  content: string;
}

// Pagination interface
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
}

// Component Props interface
interface BlogsProps {
  posts?: BlogPost[];
  postsPerPage?: number;
}

type BlogPost = ImagePost | QuotePost | VideoPost | LinkPost;

// Constants with explicit types
const POSTS_PER_PAGE: number = 5;

const blogPosts: BlogPost[] = [
  {
    id: 1,
    type: "image",
    image: "/img/blog-classic/classic_01.jpg",
    date: "Sep 14, 2020",
    readTime: "9 Min Read",
    category: { name: "KbDoc", className: "orange" },
    title: "10 WordPress Security Issues And How to Fix Them",
    excerpt:
      "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
    author: {
      name: "Jason Response",
      image: "/img/blog-grid/author_1.jpg",
    },
  },
  {
    id: 2,
    type: "quote",
    quote:
      "He legged it that blatant brown bread some dodgy chav super a blinding shot my lady lavatory cup of char cor blimey guvnor get stuffed mate you mug cobblers off his nut pukka, give us a bell",
    author: "Jason Response",
  },
  {
    id: 3,
    type: "video",
    image: "/img/blog-classic/classic_02.jpg",
    videoUrl: "https://www.youtube.com/watch?v=sU3FkzUKHXU",
    date: "Sep 14, 2020",
    readTime: "9 Min Read",
    category: { name: "KbDoc", className: "c_blue" },
    title: "10 WordPress Security Issues And How to Fix Them",
    excerpt:
      "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
    author: {
      name: "Jason Response",
      image: "/img/blog-grid/author_1.jpg",
    },
    url: "#",
  },
  {
    id: 4,
    type: "link",
    content:
      "loo Oxford get stuffed mate bits and bobs barmy no biggie Richard Eaton are you taking the piss gosh, tomfoolery tosser.",
  },
  {
    id: 5,
    type: "image",
    image: "/img/blog-classic/classic_03.jpg",
    date: "Dec 09, 2020",
    readTime: "19 Min Read",
    category: { name: "KbDoc", className: "orange" },
    title: "Create A WordPress Multi Step Form With weForms",
    excerpt:
      "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
    author: {
      name: "Jason Response",
      image: "/img/blog-grid/author_1.jpg",
    },
  },
  {
    id: 6,
    type: "image",
    image: "/img/blog-classic/classic_04.jpg",
    date: "Dec 09, 2020",
    readTime: "9 Min Read",
    category: { name: "KbDoc", className: "green" },
    title: "Create Conditional Logic Forms & Publish",
    excerpt:
      "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
    author: {
      name: "Jason Response",
      image: "/img/blog-grid/author_1.jpg",
    },
  },
];

const Blogs = (): ReactElement => {
  const {
    currentPage,
    totalPages,
    currentItems: paginatedPosts,
    handlePageClick,
  } = useBlogPagination<BlogPost>({
    items: blogPosts,
    itemsPerPage: POSTS_PER_PAGE,
  });
  return (
    <>
      <div className="col-lg-8">
        {paginatedPosts.map((post) => {
          if (post.type === "quote") {
            return (
              <blockquote key={post.id}>
                <h4 className="c_head">{post.quote}</h4>
                <Link href="#" className="author">
                  {post.author}
                </Link>
              </blockquote>
            );
          }
          if (post.type === "link") {
            return (
              <div className="blog_link_post" key={post.id}>
                <Link href="#">
                  <p>{post.content}</p>
                </Link>
              </div>
            );
          }
          if (post.type === "video") {
            return (
              <div key={post.id} className="blog_top_post blog_classic_item">
                <div className="video_post">
                  <img src={post.image} alt="" />
                  <Link
                    className="popup-youtube video_icon"
                    href={post.videoUrl}
                  >
                    <i className="arrow_triangle-right" />
                  </Link>
                </div>
                <div className="b_top_post_content">
                  <div className="post_tag">
                    <Link href="#">{post.date}</Link>
                    <Link href="#">{post.readTime}</Link>
                    <Link className="c_blue" href="#">
                      {post.category.name}
                    </Link>
                  </div>
                  <Link href="#">
                    <h3>{post.title}</h3>
                  </Link>
                  <p>{post.excerpt}</p>
                  <div className="d-flex justify-content-between p_bottom">
                    <Link href="/blog-single" className="learn_btn">
                      Continue Reading
                      <i className="arrow_right" />
                    </Link>
                    <div className="media post_author">
                      <div className="round_img">
                        <img src={post.author.image} alt="" />
                      </div>
                      <div className="media-body author_text">
                        <Link href="#">
                          <h4>{post.author.name}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (post.type === "image") {
            return (
              <div key={post.id} className="blog_top_post blog_classic_item">
                <img src={post.image} alt="" />
                <div className="b_top_post_content">
                  <div className="post_tag">
                    <Link href="#">{post.date}</Link>
                    <Link href="#">{post.readTime}</Link>
                    <Link className={post.category.className} href="#">
                      {post.category.name}
                    </Link>
                  </div>
                  <Link href="#">
                    <h3>{post.title}</h3>
                  </Link>
                  <p>{post.excerpt}</p>
                  <div className="d-flex justify-content-between p_bottom">
                    <Link href="/blog-single" className="learn_btn">
                      Continue Reading
                      <i className="arrow_right" />
                    </Link>
                    <div className="media post_author">
                      <div className="round_img">
                        <img src={post.author.image} alt="" />
                      </div>
                      <div className="media-body author_text">
                        <Link href="#">
                          <h4>{post.author.name}</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <nav className="navigation pagination">
          <div className="nav-links">
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
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => {
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
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
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
    </>
  );
};

export default Blogs;
