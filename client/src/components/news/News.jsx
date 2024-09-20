import React from "react";
import "./news.css";
import { formatDate } from "../../App";

const News = ({ data }) => {
    return (
        <div className="news-card">
            <img src={data.images.heroImg} />
            <label>{formatDate(data.metadata.datePosted)}</label>
            <div className="heading">{data.name}</div>
            {/* <div className="article">{data.description.name}</div> */}
        </div>
    );
};

export default News;
