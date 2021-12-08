import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import "./index.css"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

/**
 * Handle product pagination
 * @param {*} param0
 * @returns pagination component
 */
export default function PaginatedItems({
  itemsPerPage,
  productList,
  setCurrentItems,
}) {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(productList.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(productList.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length
    setItemOffset(newOffset)
  }

  return (
    <div className="chakra-ui-pagination">
      <ReactPaginate
        nextLabel={<ChevronRightIcon />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<ChevronLeftIcon />}
        pageClassName="chakra-ui-pagination page-item"
        pageLinkClassName="chakra-ui-pagination page-link"
        previousClassName="chakra-ui-pagination page-item"
        previousLinkClassName="chakra-ui-pagination page-link"
        nextClassName="chakra-ui-pagination page-item"
        nextLinkClassName="chakra-ui-pagination page-link"
        breakLabel="..."
        breakClassName="chakra-ui-pagination page-item"
        breakLinkClassName="chakra-ui-pagination page-link"
        containerClassName="chakra-ui-pagination pagination"
        activeClassName="chakra-ui-pagination active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
