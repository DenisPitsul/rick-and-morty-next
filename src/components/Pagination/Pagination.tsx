"use client";

import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

type Props = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  pageNumber: number;
  updatePageNumber: (pageNumber: number) => void;
};

const Pagination = ({ pageNumber, info, updatePageNumber }: Props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pageChange = (data: { selected: number }) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .pagination {
            font-size: 12px;
          }
          .next,
          .prev {
            display: none;
          }
        }
      `}</style>

      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages || 0}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
