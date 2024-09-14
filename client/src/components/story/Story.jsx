import React from "react";
import "./Story.css";
import { formatDate } from "../../App";


const Story = ({ data }) => {
    return (
        <div className="story">
            <img src={data.images.heroImg} />
            <div className="story-info">
                <div className="date">{formatDate(data.metadata.dateUpdated)}</div>
                <div className="heading">{data.name}</div>
                <div className="desc">{data.description.name}</div>
            </div>
        </div>
    );
};

export default Story;
