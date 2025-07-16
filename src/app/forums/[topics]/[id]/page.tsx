"use client";
import DefaultLayout from "@/components/layout";
import { use, useMemo, useState } from "react";
import { getTopicById } from "../../forum-data";
import BreadcrumbForumSingle from "./.components/breadcrumb-forum-single";
import ForumSingleCallToAction from "./.components/forum-single-call-to-action";
import ForumSinglePost from "./.components/forum-single-post";
import ForumSingleSidebar from "./.components/forum-single-sidebar";

const COMMENTS_PER_PAGE = 1;

const ForumSinglePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [currentPage, setCurrentPage] = useState(1);

  const post = getTopicById(Number(id));

  // Paginate comments
  const paginatedComments = useMemo(() => {
    if (!post?.comments) return [];

    const firstPageIndex = (currentPage - 1) * COMMENTS_PER_PAGE;
    const lastPageIndex = firstPageIndex + COMMENTS_PER_PAGE;
    return post.comments.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, post?.comments]);

  // Create a modified post object with paginated comments
  const postWithPaginatedComments = useMemo(() => {
    if (!post) return null;

    return {
      ...post,
      comments: paginatedComments,
    };
  }, [post, paginatedComments]);

  return (
    <DefaultLayout>
      <BreadcrumbForumSingle />
      <section className="doc_blog_grid_area sec_pad forum-single-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <ForumSinglePost
                post={postWithPaginatedComments}
                pagination={{
                  currentPage,
                  totalCount: post?.comments?.length || 0,
                  pageSize: COMMENTS_PER_PAGE,
                  onPageChange: setCurrentPage,
                }}
              />
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
