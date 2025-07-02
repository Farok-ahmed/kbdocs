import DefaultLayout from "@/components/layout";
import BreadcrumbForumSingle from "@/components/page-sections/forum-single-page/breadcrumb-forum-single";
import ForumSingleCallToAction from "@/components/page-sections/forum-single-page/forum-single-call-to-action";
import ForumSingleComments from "@/components/page-sections/forum-single-page/forum-single-comments";
import ForumSinglePost from "@/components/page-sections/forum-single-page/forum-single-post";
import ForumSingleSidebar from "@/components/page-sections/forum-single-page/forum-single-sidebar";

const ForumSinglePage = () => {
  return (
    <>
      <DefaultLayout>
        <BreadcrumbForumSingle />
        <section className="doc_blog_grid_area sec_pad forum-single-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ForumSinglePost />
                <ForumSingleComments />
              </div>
              <ForumSingleSidebar />
            </div>
          </div>
        </section>

        <ForumSingleCallToAction />
      </DefaultLayout>
    </>
  );
};

export default ForumSinglePage;
