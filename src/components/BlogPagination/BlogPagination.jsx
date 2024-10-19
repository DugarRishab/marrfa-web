import React, { useState } from "react";
import "./BlogPagination.css";
import { Card, Pagination } from "antd";
import News from "../news/News";
// import { NewsList } from "../../pages/Homepage/Homepage";

// const Sample = [...NewsList, ...NewsList, ...NewsList];

const BlogPagination = ({items}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const {innerWidth} = window;
    const pageSize = innerWidth>=1130?12:8; // cards per page
    var cols = 3;
    if(innerWidth>=1130)cols=3;
    else if(innerWidth>=750) cols = 2;
    else cols = 1;


    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the cards to display based on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const currentCards = items.slice(startIndex, startIndex + pageSize);

    return (
        <>
            {/* Card grid */}
            <div
                className="blogpagination"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, 1fr)`, // 3 columns
                    gap: "16px", // Space between cards
                    width: "100%",
                    padding: "1rem 0rem",
                }}
            >
                {currentCards.map((index, item) => <News key={index} data={{
                    
                }} />)}
            </div>

            {/* Pagination controls */}
            <Pagination
                current={currentPage} // Controlled current page
                total={items.length} // Total number of cards
                pageSize={pageSize} // Cards per page
                onChange={handlePageChange}
            />
        </>
    );
};

export default BlogPagination;
