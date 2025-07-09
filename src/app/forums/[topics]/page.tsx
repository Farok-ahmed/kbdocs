import DefaultLayout from "@/components/layout";
import { topicsListWithFilteredForums } from "../forum-data";
import BreadcrumbTopic from "./.components/breadcrumb-topic";
import CallToActionTopic from "./.components/call-to-action-topic";
import CommunitiesForumTopics from "./.components/communities-forum-topics";
import TopicsAnswerAction from "./.components/topics-answer-action";
import TopicsHeader from "./.components/topics-header";
import TopicsPagination from "./.components/topics-pagination";
import TopicsPosts from "./.components/topics-posts";
import TopicsSidebar from "./.components/topics-sidebar";

const TopicsPage = ({ params }: { params: { topics: string } }) => {
  const { topics } = params;
  const getTopics = topicsListWithFilteredForums(topics);

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
              <TopicsPosts getTopics={getTopics} />
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

export default TopicsPage;
