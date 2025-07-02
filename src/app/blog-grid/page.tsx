import DefaultLayout from "@/components/layout";
import BlogGridAction from "@/components/page-sections/blog-grid/blog-grid-action";
import BlogGridBreadcrumb from "@/components/page-sections/blog-grid/blog-grid-breadcrumb";
import BlogGridPosts from "@/components/page-sections/blog-grid/blog-grid-posts";
import BlogGridPostsTwo from "@/components/page-sections/blog-grid/blog-grid-posts-two";
import BlogGridTopPost from "@/components/page-sections/blog-grid/blog-grid-top-post";

const BlogGridPage = () => {
  return (
    <DefaultLayout>
      <BlogGridBreadcrumb />
      <BlogGridTopPost />
      <BlogGridPosts />
      <BlogGridAction />
      <BlogGridPostsTwo />
    </DefaultLayout>
  );
};

export default BlogGridPage;
