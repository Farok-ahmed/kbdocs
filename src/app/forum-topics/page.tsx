import DefaultLayout from "@/components/layout";
import BreadcrumbTopic from "@/components/page-sections/forum-topics/breadcrumb-topic";
import CommunitiesForumTopics from "@/components/page-sections/forum-topics/communities-forum-topics";
import TopicsAnswerAction from "@/components/page-sections/forum-topics/topics-answer-action";
import TopicsHeader from "@/components/page-sections/forum-topics/topics-header";
import TopicsPagination from "@/components/page-sections/forum-topics/topics-pagination";
import TopicsPosts from "@/components/page-sections/forum-topics/topics-posts";
import TopicsSidebar from "@/components/page-sections/forum-topics/topics-sidebar";
import CallToActionTopic from "./../../components/page-sections/forum-topics/call-to-action-topic";

const ForumTopicPage = () => {
  return (
    <DefaultLayout>
      <BreadcrumbTopic />
      <section className="doc_blog_grid_area sec_pad forum-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CommunitiesForumTopics />
              <TopicsAnswerAction />
              <TopicsHeader />
              <TopicsPosts />
              <TopicsPagination />
            </div>
            <TopicsSidebar />
          </div>
        </div>
      </section>
      <CallToActionTopic />
    </DefaultLayout>
  );
};

export default ForumTopicPage;
