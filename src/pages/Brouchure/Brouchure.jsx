import React, { useState, useEffect } from "react";
import "./Brouchure.css";

import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { Input } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import CustomButton from "../../components/button/CustomButton";
const brouchures = [
	{
		name: "Lorem Ipsum Doler Sit",
		img: "./assets/brouchure/brouchure1.jpg",
	},
	{
		name: "Lorem Ipsum Doler Sit",
		img: "./assets/brouchure/brouchure1.jpg",
	},
	{
		name: "Lorem Ipsum Doler Sit",
		img: "./assets/brouchure/brouchure1.jpg",
	},
	{
		name: "Lorem Ipsum Doler Sit",
		img: "./assets/brouchure/brouchure1.jpg",
	},
	{
		name: "Lorem Ipsum Doler Sit",
		img: "./assets/brouchure/brouchure1.jpg",
	},
	{
		name: "Lorem Ipsum Doler Sit",
		img: "./assets/brouchure/brouchure1.jpg",
	},
	{
		name: "Lorem Ipsum Doler Sit",
		img: "./assets/brouchure/brouchure1.jpg",
	},
];

const BrouchurePage = () => {
	return (
		<div className="brouchure-page">
			<section className="section-1">
				<div className="bg">
					<img src="./assets/brouchure/brouchure_banner.jpg" alt="" />
				</div>
				<div className="content">
					<div className="heading">
						Explore Our Curated Collection of Property Brochures for
						Smart Investment Decisions
					</div>
					<Input
						className="search"
						addonBefore={<SearchOutlined />}
						style={{
							
							lineHeight: "2.5rem",
							border: "none",
							background: "rgba(255, 255, 255)",
							borderRadius: "var(--border-radius)",
						}}
						size="large"
						allowClear
						// prefix={<SearchOutlined></SearchOutlined>}
						placeholder="Looking for something specific"
					></Input>
				</div>
			</section>
			<section className="section-2">
				{brouchures.map((item, id) => (
					<div className="brouchure-card-wrapper" key={id}>
						<div className="brouchure-card">
							<img src={item.img} alt="" />
							<div className="title">{item.name}</div>
						</div>
						<CustomButton
							text={"Download"}
							endIcon={<DownloadOutlined></DownloadOutlined>}
						></CustomButton>
					</div>
				))}
			</section>
		</div>
	);
};

export default BrouchurePage;
