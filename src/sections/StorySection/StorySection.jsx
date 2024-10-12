import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import CustomButton from "../../components/button/CustomButton";
import storyData from "../../assets/data/stories.json";
import StoryCard from "../../components/StoryCard/StoryCard";
import "./StorySection.css";
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
				sub="Lorem Ipsum doler sith"
			></Heading>
			<div className="cards">
				{StoryList.map((item, i) => ( innerWidth < 720 && i <= 1) && item)}
				{innerWidth > 720 && StoryList.map((item, i) => item)}
			</div>

			{/* <Carousel items={StoryList}></Carousel> */}
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
