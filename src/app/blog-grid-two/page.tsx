import DefaultLayout from "@/components/layout";
import BlogItems from "./_components/blog-items";
import Breadcrumb from "./_components/breadcrumb";
import SideBar from "./_components/sidebar";

const BlogGridTwo = () => {
  return (
    <DefaultLayout>
      <Breadcrumb />
      <section className="doc_blog_grid_area sec_pad">
        <div className="container">
          <div className="row">
            <BlogItems />
            <SideBar />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default BlogGridTwo;
