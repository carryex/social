import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <Pagination
      count={pagesCount}
      page={currentPage}
      siblingCount={1}
      onChange={(e, page) => {
        onPageChanged(page);
      }}
    />
  );
};

export default Paginator;
