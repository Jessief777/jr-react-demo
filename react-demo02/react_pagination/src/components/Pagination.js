import { useEffect, useState } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  currentPage,
  setCurrentPage,
}) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      arr.push(i);
    }
    setPageNumbers(arr);
  }, [totalPosts, postsPerPage]);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.length > 0 &&
          pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                style={{
                  background: currentPage === number ? "lightblue" : null,
                }}
                onClick={() => setCurrentPage(number)}
                className="page-btn"
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
