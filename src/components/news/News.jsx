import React from "react";
import "./news.css";
import { formatDate } from "../../utils/BasicFunctions";;

const News = ({ data, inMobile=false }) => {
    return (
        <div style = {{marginBottom: inMobile?"2rem":"none"}} className="news-card">
            <img src={data.images?.heroImg || "/assets/balloon.jpeg"} />
            <label>{formatDate(data.metadata?.datePosted)}</label>
            <div className="heading">{data?.name}</div>
            <div className="article">{data.description?.name}</div>
        </div>
    );
};

export default News;
