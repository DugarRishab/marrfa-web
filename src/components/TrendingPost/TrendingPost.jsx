import React from "react";
import "./TrendingPost.css";
import homebanner from "../../../public/assets/banner/HomeBanner2.jpg";
import { Button } from "antd";
import { ShareAltOutlined, RightOutlined } from "@ant-design/icons";
import CustomButton from "../button/CustomButton";

const TrendingPost = ({heading_byline, heading, desc, bannersrc}) => {
    return (
        <div className="trending-post">
            <div className="content">
                <span className="head-byline">{heading_byline}</span>
                <span className="post-heading">{heading}</span>
                <p className="desc">
                    {desc}
                </p>
                <div className="buttongrp">
                    <CustomButton
                        endIcon={<RightOutlined />}
                        text={"Read"}
                        background="rgba(255, 255, 255, 0.05)"
                        style={{ padding: "0.2rem", fontSize: "0.8rem", height: "1.5rem" }}
                    />
                    <CustomButton
                        endIcon={<ShareAltOutlined />}
                        text={"Share"}
                        background="rgba(255, 255, 255, 0.05)"
                        style={{ padding: "0.2rem", fontSize: "0.8rem", height: "1.5rem" }}
                    />
                </div>
            </div>
            <div className="banner">
                <img src={bannersrc} alt="homebanner" />
            </div>
        </div>
    );
};

export default TrendingPost;
