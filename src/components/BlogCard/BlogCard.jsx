import React from "react";
import "./BlogCard.css";
import Tag from "../tag/Tag";
import CustomButton from "../button/CustomButton";
import { RightOutlined, ShareAltOutlined } from "@ant-design/icons";

const BlogCard = ({data, inMobile}) => {
    return (
        <div style = {{marginBottom: inMobile?"2rem":"none"}} className="blogcard">
            <div
                className="image-section"
                style={{
                    background: `url("${data.imageURL}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="taglist">
                    {data.tags.map((value, index)=>(
                        <Tag version={2} text={value} key={index} />
                    ))}
                </div>
            </div>
            <div className="body-section">
                <div className="ribbon">
                    <div className="datelabel">{data.date}</div>
                    <div className="categorylabel">
                        Category: <span>{data.category}</span>
                    </div>
                </div>
                <div className="heading">{data.heading}</div>
                <div className="desc">
                    {data.description}
                </div>
                <div className="links">
                    <div className="link-label">Read <RightOutlined /> </div>
                    <div className="link-label">Share <ShareAltOutlined /> </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
