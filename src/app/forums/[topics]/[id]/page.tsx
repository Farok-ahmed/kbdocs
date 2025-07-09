import DefaultLayout from "@/components/layout";
import { getTopicById } from "../../forum-data";
import BreadcrumbForumSingle from "./.components/breadcrumb-forum-single";
import ForumSingleCallToAction from "./.components/forum-single-call-to-action";
import ForumSinglePost from "./.components/forum-single-post";
import ForumSingleSidebar from "./.components/forum-single-sidebar";

const ForumSinglePage = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const post = getTopicById(Number(id));

  return (
    <DefaultLayout>
      <BreadcrumbForumSingle />
      <section className="doc_blog_grid_area sec_pad forum-single-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ForumSinglePost post={post} />
            </div>
            <ForumSingleSidebar />
          </div>
        </div>
      </section>

      <ForumSingleCallToAction />
    </DefaultLayout>
  );
};

export default ForumSinglePage;
