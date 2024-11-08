import React from "react";
import "./TrendingPost.css";
import { ShareAltOutlined, RightOutlined } from "@ant-design/icons";
import CustomButton from "../button/CustomButton";
import { Link } from "react-router-dom";

const TrendingPost = ({heading_byline, heading, desc, date, tag, bannersrc, id}) => {
    return (
		<div className="trending-post">
			<div className="content">
				<span className="head-byline">{`${date} | ${tag && tag}`}</span>
				<span className="post-heading">
					<Link to={"/blog/" + id}>{heading}</Link>
				</span>
				<p className="desc">{desc}</p>
				<div className="buttongrp">
					<CustomButton
						endIcon={<RightOutlined />}
						text={"Read"}
						background="rgba(255, 255, 255, 0.05)"
						style={{
							padding: "0.2rem",
							fontSize: "0.8rem",
							height: "1.5rem",
						}}
					/>
					<CustomButton
						endIcon={<ShareAltOutlined />}
						text={"Share"}
						background="rgba(255, 255, 255, 0.05)"
						style={{
							padding: "0.2rem",
							fontSize: "0.8rem",
							height: "1.5rem",
						}}
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
