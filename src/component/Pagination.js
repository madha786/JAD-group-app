import React, { useState, useEffect } from "react";

function Pagination(props) {
  const [pageno, setPageno] = useState([]);
  // const [page, setPage] = useState(props.currentPage);
  const [totalpage, setTotal] = useState(100);

  const handlePageClick = (selectedPage) => {
    props.onPageChange(selectedPage);
  };

  const handleArrowClick = (direction) => {
    const windowWidth = window.innerWidth;
    let maxPagesToShow;
    if(windowWidth > 500) {
      maxPagesToShow = 4
    }
    else {
      maxPagesToShow = 3
    }

    if (direction === "left") {
      const newStartPage = Math.max(1, pageno[0] - maxPagesToShow);
      const newPageno = Array.from(
        { length: maxPagesToShow },
        (_, index) => newStartPage + index
      );
      const uniquePageno = [...new Set(newPageno)];
      setPageno(uniquePageno);

    } else if (direction === "right") {
      const newEndPage = Math.min(
        totalpage,
        pageno[pageno.length - 1] + maxPagesToShow
      );
      const newPageno = Array.from(
        { length: maxPagesToShow },
        (_, index) => newEndPage - index
      ).reverse();
      const uniquePageno = [...new Set(newPageno)];
      console.log(uniquePageno)
      setPageno(uniquePageno);

    }
  };

  useEffect(() => {
    var totalPages = Math.ceil(props.total / 10);
    setTotal(totalPages)

    if(totalPages < 4) {
      let pageNumber = [];

      if(totalPages > 3) {
        for(let i = 1; i <= totalPages; i++) {
          pageNumber.push(1)
        }
      }
      else if(totalPages == 3) {
        pageNumber.push(1,2)
      } 
      else {
        pageNumber.push(1)
      }
      
      setPageno(pageNumber)
    }
    else {
      const windowWidth = window.innerWidth;
      if(windowWidth > 500) {
      setPageno([1,2,3,4])
      }
      else {
        setPageno([1,2,3])
      }
    }

  },[props.total])



  return (
    <>
      <div className="pagination-container">
        <div className="arrow-left" onClick={() => handleArrowClick("left")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M19.5 12.6553L5.5 12.6553"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 19.6553L5.5 12.6553L12.5 5.65527"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="pagination-links">
          <div className="page-main">
            {pageno.map((pageNumber) => (
              <div
                key={pageNumber}
                className={`page-num ${
                  props.currentPage === pageNumber ? "page-active" : ""
                }`}
                onClick={() => handlePageClick(pageNumber)}
              >
                <h5>{pageNumber}</h5>
              </div>
            ))}
          </div>
          <div className="page-last">
            {
              totalpage > 7 ? <div className="page-num page-dot">
              <h5>...</h5>
            </div> : null
            }
            

            <div
              className={`page-num ${props.currentPage === totalpage ? "page-active" : ""}`}
              onClick={() => handlePageClick(totalpage)}
            >
              <h5>{totalpage}</h5>
            </div>
          </div>
        </div>
        <div className="arrow-right" onClick={() => handleArrowClick("right")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M5.5 12.6553H19.5"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5 5.65527L19.5 12.6553L12.5 19.6553"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Pagination;
