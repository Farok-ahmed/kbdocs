import { DOTS, usePagination } from "@/hooks/usePagination";
import Link from "next/link";

interface TopicsPaginationProps {
  onPageChange: (page: number) => void;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  className?: string;
}

const TopicsPagination = ({
  onPageChange,
  currentPage,
  totalCount,
  pageSize,
  siblingCount = 1,
  className = "",
}: TopicsPaginationProps) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
    siblingCount,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
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

  // Calculate item range text
  const firstItemOnPage = (currentPage - 1) * pageSize + 1;
  const lastItemOnPage = Math.min(currentPage * pageSize, totalCount);

  return (
    <>
      <div className={`pagination-wrapper ${className}`}>
        <div className="view-post-of">
          <p>
            Viewing {pageSize} topics - {firstItemOnPage} through{" "}
            {lastItemOnPage} (of {totalCount} total)
          </p>
        </div>
        <ul className="post-pagination">
          {/* Previous button */}
          <li
            className={`prev-post ${currentPage === 1 ? "pegi-disable" : ""}`}
          >
            <Link
              href="#"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                if (currentPage > 1) onPrevious();
              }}
            >
              <i className="arrow_carrot-left"></i>
            </Link>
          </li>

          {/* Pagination numbers */}
          {paginationRange.map((pageNumber: number | string, index: number) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return (
                <li key={`dots-${index}`} className="pagination-item dots">
                  &#8230;
                </li>
              );
            }

            // Render our Page Pills
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
              <i className="arrow_carrot-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopicsPagination;
