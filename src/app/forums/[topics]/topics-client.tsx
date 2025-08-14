"use client";
import { useMemo, useState } from "react";
import CommunitiesForumTopics from "./.components/communities-forum-topics";
import TopicsAnswerAction from "./.components/topics-answer-action";
import TopicsHeader from "./.components/topics-header";
import TopicsPagination from "./.components/topics-pagination";
import TopicsPosts from "./.components/topics-posts";

type Topic = any;

interface TopicsClientProps {
  topics: Topic[];
  pageSize?: number;
}

const TopicsClient = ({ topics, pageSize = 6 }: TopicsClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return topics.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, topics]);

  return (
    <>
      <CommunitiesForumTopics />
      <TopicsAnswerAction />
      <TopicsHeader />
      <TopicsPosts getTopics={currentTableData} />
      <TopicsPagination
        currentPage={currentPage}
        totalCount={topics.length}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
};

export default TopicsClient;
