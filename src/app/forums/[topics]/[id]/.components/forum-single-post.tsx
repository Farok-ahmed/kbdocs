import { DOTS, usePagination } from "@/app/hooks/usePagination";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

interface ForumSinglePostProps {
  post: any;
  pagination?: PaginationProps;
}

const ForumSinglePost = ({ post, pagination }: ForumSinglePostProps) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <div className="forum-post-top">
            <Link className="author-avatar" href="#">
              <img src={post.authorAvatar} alt={post.authorName} />
            </Link>
            <div className="forum-post-author">
              <Link className="author-name" href="#">
                {post.authorName}
              </Link>
              <div className="forum-author-meta">
                <div className="author-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="16px"
                    height="15px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(131, 135, 147)"
                      d="M11.729,12.136 L11.582,12.167 C11.362,12.415 11.125,12.645 10.869,12.857 L14.999,12.857 C15.134,12.857 15.255,12.944 15.307,13.077 C15.359,13.211 15.331,13.365 15.235,13.467 L14.488,14.268 C14.053,14.733 13.452,15.000 12.838,15.000 L2.495,15.000 C1.872,15.000 1.286,14.740 0.845,14.268 L0.098,13.467 C0.002,13.365 -0.026,13.211 0.026,13.077 C0.077,12.944 0.199,12.857 0.334,12.857 L4.463,12.857 C2.928,11.585 2.000,9.630 2.000,7.499 L2.000,6.785 C2.000,6.194 2.449,5.713 3.000,5.713 L12.333,5.713 C12.885,5.713 13.333,6.194 13.333,6.785 L13.333,7.343 C13.869,7.160 14.736,6.973 15.355,7.400 C15.783,7.696 16.000,8.209 16.000,8.928 C16.000,11.239 11.903,12.100 11.729,12.136 ZM14.994,8.002 C14.557,7.698 13.715,7.941 13.294,8.113 C13.197,9.261 12.837,10.339 12.255,11.269 C13.480,10.911 15.333,10.116 15.333,8.928 C15.333,8.462 15.223,8.158 14.994,8.002 ZM10.261,4.419 C10.376,4.573 10.353,4.798 10.209,4.921 C10.148,4.974 10.074,4.999 10.001,4.999 C9.903,4.999 9.807,4.954 9.740,4.865 C9.198,4.139 9.198,3.002 9.741,2.277 C10.086,1.816 10.086,1.040 9.742,0.580 C9.627,0.426 9.650,0.201 9.794,0.078 C9.937,-0.044 10.146,-0.020 10.263,0.134 C10.805,0.860 10.805,1.996 10.263,2.722 C9.917,3.183 9.917,3.959 10.261,4.419 ZM8.259,4.419 C8.373,4.573 8.350,4.798 8.207,4.921 C8.145,4.974 8.071,4.999 7.999,4.999 C7.901,4.999 7.804,4.954 7.738,4.865 C7.195,4.139 7.195,3.002 7.738,2.277 C8.082,1.816 8.082,1.040 7.739,0.580 C7.624,0.426 7.647,0.201 7.791,0.078 C7.935,-0.045 8.145,-0.020 8.259,0.134 C8.802,0.860 8.802,1.996 8.259,2.722 C7.915,3.183 7.915,3.959 8.259,4.419 ZM6.261,4.418 C6.376,4.572 6.353,4.797 6.210,4.920 C6.148,4.973 6.074,4.999 6.001,4.999 C5.903,4.999 5.807,4.953 5.741,4.865 C5.198,4.139 5.198,3.002 5.741,2.276 C6.085,1.815 6.085,1.039 5.742,0.580 C5.627,0.426 5.650,0.201 5.794,0.078 C5.937,-0.046 6.147,-0.020 6.262,0.133 C6.804,0.859 6.804,1.996 6.262,2.721 C5.918,3.182 5.918,3.959 6.261,4.418 Z"
                    />
                  </svg>
                  <span>{post.authorBadge}</span>
                </div>
                <div className="author-badge">
                  <i className="icon_calendar"></i>
                  <Link href="">{post.authorPostTime}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="action-button-container">
            <Link href="#" className="action_btn btn-ans ask-btn">
              Ask Question
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Forum post content --> */}
      <div className="q-title">
        <span className="question-icon" title="Question">
          Q:
        </span>
        <h1>{post?.post?.title}</h1>
        <Link href="#" className="badge">
          {post?.post?.badge}
        </Link>
      </div>
      <div className="forum-post-content">
        <div className="content">
          {post?.post?.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.post.content }} />
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          )}
        </div>
        <div className="forum-post-btm">
          <div className="taxonomy forum-post-tags">
            <i className="icon_tags_alt"></i>
            {post.post?.tags && post.post.tags.length > 0 ? (
              post.post.tags.map((tag: any, index: number) => (
                <span key={index}>
                  <Link href="#">{tag}</Link>
                  {index < post.post.tags.length - 1 && ", "}
                </span>
              ))
            ) : (
              <span>No tags available</span>
            )}
          </div>
          <div className="taxonomy forum-post-cat">
            <img src={post?.post?.categoryIcon} alt="" />
            <Link href="#">{post.post?.category}</Link>
          </div>
        </div>
        <div className="action-button-container action-btns">
          <Link href="#" className="action_btn btn-ans ask-btn reply-btn">
            Reply
          </Link>
          <Link href="#" className="action_btn btn-ans ask-btn too-btn">
            I have this question too ({post.post?.questionTooCount || 0})
          </Link>
        </div>
      </div>
      <div className="best-answer">
        <div className="row">
          <div className="col-lg-9">
            <div className="forum-post-top">
              <Link className="author-avatar" href="#">
                <img src={post?.bestAnswer?.author?.avatar} alt="" />
              </Link>
              <div className="forum-post-author">
                <Link className="author-name" href="#">
                  {post?.bestAnswer?.author?.name}
                </Link>
                <div className="forum-author-meta">
                  <div className="author-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="16px"
                      height="15px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(131, 135, 147)"
                        d="M11.729,12.136 L11.582,12.167 C11.362,12.415 11.125,12.645 10.869,12.857 L14.999,12.857 C15.134,12.857 15.255,12.944 15.307,13.077 C15.359,13.211 15.331,13.365 15.235,13.467 L14.488,14.268 C14.053,14.733 13.452,15.000 12.838,15.000 L2.495,15.000 C1.872,15.000 1.286,14.740 0.845,14.268 L0.098,13.467 C0.002,13.365 -0.026,13.211 0.026,13.077 C0.077,12.944 0.199,12.857 0.334,12.857 L4.463,12.857 C2.928,11.585 2.000,9.630 2.000,7.499 L2.000,6.785 C2.000,6.194 2.449,5.713 3.000,5.713 L12.333,5.713 C12.885,5.713 13.333,6.194 13.333,6.785 L13.333,7.343 C13.869,7.160 14.736,6.973 15.355,7.400 C15.783,7.696 16.000,8.209 16.000,8.928 C16.000,11.239 11.903,12.100 11.729,12.136 ZM14.994,8.002 C14.557,7.698 13.715,7.941 13.294,8.113 C13.197,9.261 12.837,10.339 12.255,11.269 C13.480,10.911 15.333,10.116 15.333,8.928 C15.333,8.462 15.223,8.158 14.994,8.002 ZM10.261,4.419 C10.376,4.573 10.353,4.798 10.209,4.921 C10.148,4.974 10.074,4.999 10.001,4.999 C9.903,4.999 9.807,4.954 9.740,4.865 C9.198,4.139 9.198,3.002 9.741,2.277 C10.086,1.816 10.086,1.040 9.742,0.580 C9.627,0.426 9.650,0.201 9.794,0.078 C9.937,-0.044 10.146,-0.020 10.263,0.134 C10.805,0.860 10.805,1.996 10.263,2.722 C9.917,3.183 9.917,3.959 10.261,4.419 ZM8.259,4.419 C8.373,4.573 8.350,4.798 8.207,4.921 C8.145,4.974 8.071,4.999 7.999,4.999 C7.901,4.999 7.804,4.954 7.738,4.865 C7.195,4.139 7.195,3.002 7.738,2.277 C8.082,1.816 8.082,1.040 7.739,0.580 C7.624,0.426 7.647,0.201 7.791,0.078 C7.935,-0.045 8.145,-0.020 8.259,0.134 C8.802,0.860 8.802,1.996 8.259,2.722 C7.915,3.183 7.915,3.959 8.259,4.419 ZM6.261,4.418 C6.376,4.572 6.353,4.797 6.210,4.920 C6.148,4.973 6.074,4.999 6.001,4.999 C5.903,4.999 5.807,4.953 5.741,4.865 C5.198,4.139 5.198,3.002 5.741,2.276 C6.085,1.815 6.085,1.039 5.742,0.580 C5.627,0.426 5.650,0.201 5.794,0.078 C5.937,-0.046 6.147,-0.020 6.262,0.133 C6.804,0.859 6.804,1.996 6.262,2.721 C5.918,3.182 5.918,3.959 6.261,4.418 Z"
                      />
                    </svg>
                    <span> {post?.bestAnswer?.author?.badge}</span>
                  </div>
                  <div className="author-badge">
                    <i className="icon_calendar" />
                    <Link href="">{post?.bestAnswer?.author?.postTime}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <p className="accepted-ans-mark">
              <i className="icon_check" /> <span>Accepted Solution</span>
            </p>
          </div>
        </div>
        <div className="best-ans-content d-flex">
          <span className="question-icon" title="The Best Answer">
            A:
          </span>
          <p>
            {post?.bestAnswer?.content ? (
              <div
                dangerouslySetInnerHTML={{ __html: post.bestAnswer.content }}
              />
            ) : (
              "This is the best answer to the question."
            )}
          </p>
        </div>
      </div>
      {/* All answer */}
      <div className="all-answers">
        <h3 className="title">All Replies</h3>
        <div className="filter-bar d-flex">
          <div className="sort">
            <select className="custom-select" id="sortBy">
              <option>Sort By</option>
              <option value={1}>ASC</option>
              <option value={2}>Desc</option>
              <option value={3}>Vote</option>
            </select>
          </div>
          <p>Page 1 of 4</p>
        </div>
        {post?.comments && post.comments.length > 0 ? (
          post.comments.map((comment: any, index: number) => (
            <div className="forum-comment" key={index}>
              <div className="forum-post-top">
                <Link className="author-avatar" href="#">
                  <img
                    src={comment?.author?.avatar}
                    alt={comment?.author?.name}
                  />
                </Link>
                <div className="forum-post-author">
                  <Link className="author-name" href="#">
                    {comment?.author?.name}
                  </Link>
                  <div className="forum-author-meta">
                    <div className="author-badge">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="16px"
                        height="15px"
                      >
                        <path
                          fillRule="evenodd"
                          fill="rgb(131, 135, 147)"
                          d="M11.729,12.136 L11.582,12.167 C11.362,12.415 11.125,12.645 10.869,12.857 L14.999,12.857 C15.134,12.857 15.255,12.944 15.307,13.077 C15.359,13.211 15.331,13.365 15.235,13.467 L14.488,14.268 C14.053,14.733 13.452,15.000 12.838,15.000 L2.495,15.000 C1.872,15.000 1.286,14.740 0.845,14.268 L0.098,13.467 C0.002,13.365 -0.026,13.211 0.026,13.077 C0.077,12.944 0.199,12.857 0.334,12.857 L4.463,12.857 C2.928,11.585 2.000,9.630 2.000,7.499 L2.000,6.785 C2.000,6.194 2.449,5.713 3.000,5.713 L12.333,5.713 C12.885,5.713 13.333,6.194 13.333,6.785 L13.333,7.343 C13.869,7.160 14.736,6.973 15.355,7.400 C15.783,7.696 16.000,8.209 16.000,8.928 C16.000,11.239 11.903,12.100 11.729,12.136 ZM14.994,8.002 C14.557,7.698 13.715,7.941 13.294,8.113 C13.197,9.261 12.837,10.339 12.255,11.269 C13.480,10.911 15.333,10.116 15.333,8.928 C15.333,8.462 15.223,8.158 14.994,8.002 ZM10.261,4.419 C10.376,4.573 10.353,4.798 10.209,4.921 C10.148,4.974 10.074,4.999 10.001,4.999 C9.903,4.999 9.807,4.954 9.740,4.865 C9.198,4.139 9.198,3.002 9.741,2.277 C10.086,1.816 10.086,1.040 9.742,0.580 C9.627,0.426 9.650,0.201 9.794,0.078 C9.937,-0.044 10.146,-0.020 10.263,0.134 C10.805,0.860 10.805,1.996 10.263,2.722 C9.917,3.183 9.917,3.959 10.261,4.419 ZM8.259,4.419 C8.373,4.573 8.350,4.798 8.207,4.921 C8.145,4.974 8.071,4.999 7.999,4.999 C7.901,4.999 7.804,4.954 7.738,4.865 C7.195,4.139 7.195,3.002 7.738,2.277 C8.082,1.816 8.082,1.040 7.739,0.580 C7.624,0.426 7.647,0.201 7.791,0.078 C7.935,-0.045 8.145,-0.020 8.259,0.134 C8.802,0.860 8.802,1.996 8.259,2.722 C7.915,3.183 7.915,3.959 8.259,4.419 ZM6.261,4.418 C6.376,4.572 6.353,4.797 6.210,4.920 C6.148,4.973 6.074,4.999 6.001,4.999 C5.903,4.999 5.807,4.953 5.741,4.865 C5.198,4.139 5.198,3.002 5.741,2.276 C6.085,1.815 6.085,1.039 5.742,0.580 C5.627,0.426 5.650,0.201 5.794,0.078 C5.937,-0.046 6.147,-0.020 6.262,0.133 C6.804,0.859 6.804,1.996 6.262,2.721 C5.918,3.182 5.918,3.959 6.261,4.418 Z"
                        />
                      </svg>
                      <span>{comment?.author?.badge}</span>
                    </div>
                    <div className="author-badge">
                      <i className="icon_calendar" />
                      <Link href="#">{comment?.author?.postTime}</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-content">
                {comment.content ? (
                  <div dangerouslySetInnerHTML={{ __html: comment.content }} />
                ) : (
                  <p>
                    This is a comment content. It can be a question or an answer
                    to the post.
                  </p>
                )}

                <div className="action-button-container action-btns">
                  <Link
                    href="#"
                    className="action_btn btn-ans ask-btn reply-btn"
                  >
                    Reply
                  </Link>
                  <Link href="#" className="action_btn btn-ans ask-btn too-btn">
                    Helpful
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>

      {/* Dynamic Comments Pagination */}
      {pagination && pagination.totalCount > pagination.pageSize && (
        <div className="pagination-wrapper">
          <div className="view-post-of">
            <p>
              Viewing {Math.min(pagination.pageSize, pagination.totalCount)}{" "}
              Comments -{" "}
              {(pagination.currentPage - 1) * pagination.pageSize + 1} through{" "}
              {Math.min(
                pagination.currentPage * pagination.pageSize,
                pagination.totalCount
              )}{" "}
              (of {pagination.totalCount} total)
            </p>
          </div>
          <CommentsPagination {...pagination} />
        </div>
      )}
    </>
  );
};

// Comments Pagination Component
const CommentsPagination = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}: PaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
    siblingCount: 1,
  });

  if (!paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < totalPageCount) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="post-pagination">
      {/* Previous button */}
      <li className={`prev-post ${currentPage === 1 ? "pegi-disable" : ""}`}>
        <Link
          href="#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            if (currentPage > 1) onPrevious();
          }}
        >
          <i className="arrow_carrot-left" />
        </Link>
      </li>

      {/* Pagination numbers */}
      {paginationRange.map((pageNumber: number | string, index: number) => {
        if (pageNumber === DOTS) {
          return (
            <li key={`dots-${index}`} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li key={pageNumber}>
            <Link
              href="#"
              className={pageNumber === currentPage ? "active" : ""}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                onPageChange(Number(pageNumber));
              }}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}

      {/* Next button */}
      <li
        className={`next-post ${
          currentPage === lastPage ? "pegi-disable" : ""
        }`}
      >
        <Link
          href="#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            if (currentPage < totalPageCount) onNext();
          }}
        >
          <i className="arrow_carrot-right" />
        </Link>
      </li>
    </ul>
  );
};

export default ForumSinglePost;
