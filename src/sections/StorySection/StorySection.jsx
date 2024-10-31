import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import CustomButton from "../../components/button/CustomButton";
import storyData from "../../assets/data/stories.json";
import StoryCard from "../../components/StoryCard/StoryCard";
import Carousel from "../../components/carousel/Carousel";
import "./StorySection.css";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";
const StoryList = [];

for (let s of storyData) {
	StoryList.push(<StoryCard data={s} />);
}

const StorySection = () => {
	const { innerWidth } = window;
	return (
		<section className="story-section">
			<Heading
				heading="Stories where Marrfa turned vision into success"
				sub="Latest news and happenings from the world of Real Estate"
			></Heading>
			{/* <div className="cards">
				<div className="col">
					{StoryList.map(
						(item, i) => i <= 1 && item
					)}
				</div>
				<div className="col">
					{StoryList.map(
						(item, i) => i > 1 && i <= 3 && item
					)}
				</div>
				<div className="col">
					{StoryList.map(
						(item, i) => i > 3 && i <= 5 && item
					)}
				</div>
			</div> */}

			{/* <Carousel items={StoryList}></Carousel> */}
			<Mobcarousel items={StoryList}></Mobcarousel>
			{/* {innerWidth <= 720 && (
				<div className="advertise">
					<div className="question">
						Looking to advertise a property? We can help.
					</div>
					<CustomButton
						themecolor={"#000"}
						style={{
							padding: "1rem 2rem",
							fontWeight: "600",
						}}
						invert
						text={"List your Property with us"}
						fullWidth
					/>
				</div>
			)} */}
		</section>
	);
};

export default StorySection;
