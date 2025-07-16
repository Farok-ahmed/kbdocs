"use client";
import DefaultLayout from "@/components/layout";
import { use, useMemo, useState } from "react";
import { topicsListWithFilteredForums } from "../forum-data";
import BreadcrumbTopic from "./.components/breadcrumb-topic";
import CallToActionTopic from "./.components/call-to-action-topic";
import CommunitiesForumTopics from "./.components/communities-forum-topics";
import TopicsAnswerAction from "./.components/topics-answer-action";
import TopicsHeader from "./.components/topics-header";
import TopicsPagination from "./.components/topics-pagination";
import TopicsPosts from "./.components/topics-posts";
import TopicsSidebar from "./.components/topics-sidebar";

const ITEMS_PER_PAGE = 1;
const TopicsPage = ({ params }: { params: Promise<{ topics: string }> }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { topics } = use(params);
  const getTopics = topicsListWithFilteredForums(topics);

  // Calculate the items for the current page
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const lastPageIndex = firstPageIndex + ITEMS_PER_PAGE;
    return getTopics.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, getTopics]);

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
              <TopicsPosts getTopics={currentTableData} />
              <TopicsPagination
                currentPage={currentPage}
                totalCount={getTopics.length}
                pageSize={ITEMS_PER_PAGE}
                onPageChange={(page: number) => setCurrentPage(page)}
              />
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
