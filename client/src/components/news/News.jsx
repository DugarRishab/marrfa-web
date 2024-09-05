import React from "react";
import "./News.css";
import Balloon from "/assets/success.png";

const News = ({ date, heading, text, img_src }) => {
    return (
        <div className="news">
            <img src={img_src || Balloon} />
            <label>{date}</label>
            <div className="heading">{heading}</div>
            <div className="article">{text}</div>
        </div>
    );
};

export default News;
