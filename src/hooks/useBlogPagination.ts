import { useState } from "react";

export interface UsePaginationProps<T> {
  items: T[];
  itemsPerPage: number;
}

export const useBlogPagination = <T>({
  items,
  itemsPerPage,
}: UsePaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageClick,
  };
};
