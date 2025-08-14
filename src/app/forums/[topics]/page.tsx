import DefaultLayout from "@/components/layout";
import { topicsListWithFilteredForums } from "../forum-data";
import BreadcrumbTopic from "./.components/breadcrumb-topic";
import CallToActionTopic from "./.components/call-to-action-topic";
import TopicsSidebar from "./.components/topics-sidebar";
import TopicsClient from "./topics-client";

interface PageProps {
  params: Promise<{ topics: string }>; 
}

export default async function TopicsPage({ params }: PageProps) {
  const { topics } = await params; 
  const filteredTopics = topicsListWithFilteredForums(topics);

  return (
    <DefaultLayout>
      <BreadcrumbTopic />
      <section className="doc_blog_grid_area sec_pad forum-page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <TopicsClient topics={filteredTopics} />
            </div>
            <TopicsSidebar />
          </div>
        </div>
      </section>
      <CallToActionTopic />
    </DefaultLayout>
  );
}
