import Image from "next/image";
import Link from "next/link";

export interface Author {
  name: string;
  img: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  img: string;
  readTime: string;
  category: string;
  categoryClass: string;
  excerpt: string;
  author: Author;
}

const BlogGridPostsTwo = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Create A WordPress Multi Step Form With weForms",
      img: "/img/blog-grid/blog_grid_post7.jpg",
      readTime: "18 Min Read",
      category: "WordPress",
      categoryClass: "c_blue",
      excerpt:
        "The pressure to keep our skills sharp is constant. Mastering new skills may...",
      author: {
        name: "Jason Response",
        img: "/img/blog-grid/author_1.jpg",
        date: "Sep 14, 2020",
      },
    },
    {
      id: "2",
      title: "How to Create GDPR Consent Form In WordPress",
      img: "/img/blog-grid/blog_grid_post8.jpg",
      readTime: "18 Min Read",
      category: "KbDoc",
      categoryClass: "orange",
      excerpt:
        "The pressure to keep our skills sharp is constant. Mastering new skills may...",
      author: {
        name: "Druid Wensleydale",
        img: "/img/blog-grid/author_2.jpg",
        date: "Sep 14, 2020",
      },
    },
    {
      id: "3",
      title: "Create Conditional Logic Forms & Publish",
      img: "/img/blog-grid/blog_grid_post9.jpg",
      readTime: "10 Min Read",
      category: "Laravel",
      categoryClass: "cat-laravel",
      excerpt:
        "The pressure to keep our skills sharp is constant. Mastering new skills may...",
      author: {
        name: "Douglas Lyphe",
        img: "/img/blog-grid/author_3.jpg",
        date: "Nov 10, 2020",
      },
    },
  ];

  return (
    <>
      <section className="doc_blog_grid_area_two">
        <div className="container">
          <div className="row">
            {blogPosts.map((post: BlogPost, index: number) => (
              <div key={post.id} className="col-lg-4 col-sm-6">
                <div
                  className="blog_grid_post wow fadeInUp"
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={400}
                    height={250}
                  />
                  <div className="grid_post_content">
                    <div className="post_tag">
                      <Link href="">{post.readTime}</Link>
                      <Link className={post.categoryClass} href="">
                        {post.category}
                      </Link>
                    </div>
                    <Link href="/blog-single">
                      <h4 className="b_title">{post.title}</h4>
                    </Link>
                    <p>{post.excerpt}</p>
                    <div className="media post_author">
                      <div className="round_img">
                        <Image
                          src={post.author.img}
                          alt={post.author.name}
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="media-body author_text">
                        <h4>{post.author.name}</h4>
                        <div className="date">{post.author.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="col-lg-12 text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <Link href="/blog-grid" className="doc_border_btn all_doc_btn">
                Load More <i className="arrow_right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridPostsTwo;
