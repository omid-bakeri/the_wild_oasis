/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

// const StyledPagination = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const P = styled.p`
//   font-size: 1.4rem;
//   margin-left: 0.8rem;

//   & span {
//     font-weight: 600;
//   }
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 0.6rem;
// `;

// const PaginationButton = styled.button`
//   background-color: ${(props) =>
//     props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
//   color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
//   border: none;
//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.4rem;
//   padding: 0.6rem 1.2rem;
//   transition: all 0.3s;

//   &:has(span:last-child) {
//     padding-left: 0.4rem;
//   }

//   &:has(span:first-child) {
//     padding-right: 0.4rem;
//   }

//   & svg {
//     height: 1.8rem;
//     width: 1.8rem;
//   }

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;

function Pagination({ bookingsLength, checked, setChcecked, pagesCount }) {
  const [searchParams, setSearchParams] = useSearchParams();

  let currentPage;

  function handlePageChange(data) {
    currentPage = data.selected + 1;

    setChcecked(true);
    searchParams.set("page", currentPage);
    setSearchParams(searchParams);
  }
  return (
    <ReactPaginate
      className="flex select-none text-3xl mt-2
       gap-5 bg-gradient-to-r from-indigo-500 from-10%
        via-sky-500 via-30% to-emerald-500 to-90%
       py-6
        justify-center items-center px-8"
      previousLabel={"previous"}
      pageCount={pagesCount}
      nextLabel={"next"}
      onPageChange={handlePageChange}
      marginPagesDisplayed={3}
      breakLabel={"..."}
      activeLinkClassName="text-red-400"
      pageClassName="  flex p-4
       justify-center items-center text-red-100"
      breakClassName="text-gray-300"
      activeClassName="bg-indigo-500 p-6"
      nextClassName={`text-gray-100 `}
      previousClassName="text-gray-100"
      pageLinkClassName="text-white"
    ></ReactPaginate>
  );
}

export default Pagination;
