import React from "react";
import "./StoryCard.css";
import { formatDate } from "../../utils/BasicFunctions";


const StoryCard = ({ data }) => {
    return (
        <div className="story-card">

            <img src={"/assets/balloon.jpeg"} />
            <div className="story-info">
                <div className="date">{formatDate(data.date)}</div>
                <div className="heading">{data.title}</div>
                <div className="desc">{data.description}</div>
            </div>
        </div>
    );
};

export default StoryCard;
