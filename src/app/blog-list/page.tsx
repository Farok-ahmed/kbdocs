import DefaultLayout from "@/components/layout";
import Blogs from "./_components/blogs";
import Breadcrumb from "./_components/breadcrumb";
import Sidebar from "./_components/sidebar";

const BloglistPage = () => {
  // blog posts arry of object
  const blogPosts = [
    {
      id: 1,
      date: "Sep 14, 2020",
      readTime: "9 Min Read",
      category: "KbDoc",
      categoryColor: "orange", // color class
      title: "10 WordPress Security Issues And How to Fix Them",
      description:
        "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
      author: {
        name: "Jason Response",
        avatar: "/img/blog-grid/author_1.jpg",
      },
      imageUrl: "/img/blog-classic/classic_01.jpg",
      videoUrl: null,
    },
    {
      id: 2,
      date: "Sep 14, 2020",
      readTime: "9 Min Read",
      category: "KbDoc",
      categoryColor: "c_blue",
      title: "10 WordPress Security Issues And How to Fix Them",
      description:
        "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
      author: {
        name: "Jason Response",
        avatar: "/img/blog-grid/author_1.jpg",
      },
      imageUrl: "/img/blog-classic/classic_02.jpg",
      videoUrl: "https://www.youtube.com/watch?v=sU3FkzUKHXU",
    },
    {
      id: 3,
      date: "Dec 09, 2020",
      readTime: "19 Min Read",
      category: "KbDoc",
      categoryColor: "orange",
      title: "Create A WordPress Multi Step Form With weForms",
      description:
        "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
      author: {
        name: "Jason Response",
        avatar: "/img/blog-grid/author_1.jpg",
      },
      imageUrl: "/img/blog-classic/classic_03.jpg",
      videoUrl: null,
    },
    {
      id: 4,
      date: "Dec 09, 2020",
      readTime: "9 Min Read",
      category: "KbDoc",
      categoryColor: "green",
      title: "Create Conditional Logic Forms & Publish",
      description:
        "I don't want no agro such a fibber smashing bits and bobs posh blag cuppa brilliant brolly Eaton bobby, bite your arm off codswallop I excuse my French squiffy pukka gosh nancy boy buggered, bog-standard burke some dodgy chav.!",
      author: {
        name: "Jason Response",
        avatar: "/img/blog-grid/author_1.jpg",
      },
      imageUrl: "/img/blog-classic/classic_04.jpg",
      videoUrl: null,
    },
  ];

  return (
    <DefaultLayout>
      <Breadcrumb />
      <section className="doc_blog_classic_area sec_pad">
        <div className="container">
          <div className="row">
            <Blogs />
            <Sidebar />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default BloglistPage;
