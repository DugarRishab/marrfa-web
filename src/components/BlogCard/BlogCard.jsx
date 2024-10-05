import React from "react";
import "./BlogCard.css";
import Tag from "../tag/Tag";
import CustomButton from "../button/CustomButton";
import { RightOutlined, ShareAltOutlined } from "@ant-design/icons";

const BlogCard = () => {
    return (
        <div className="blogcard">
            <div
                className="image-section"
                style={{
                    background: `url("/assets/balloon.jpeg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="taglist">
                    <Tag text={"hello"} />
                </div>
            </div>
            <div className="body-section">
                <div className="ribbon">
                    <div className="datelabel">21 Aug 2024 </div>
                    <div className="category">
                        Category: <span>Finance</span>
                    </div>
                </div>
                <div className="heading">Hello</div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores excepturi, molestias ipsam enim eligendi voluptates rem libero nam, eum qui ad nemo officia, hic atque rerum doloribus soluta quos?
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
