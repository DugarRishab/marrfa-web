import React, { useState, useEffect } from 'react';
import Heading from "../../components/Heading/Heading";
import "./AboutSection.css";

const aboutPoints = [
	{
		text: "Real-time view of available investment opportunities",
		img: "/assets/about/opportunities.jpg",
	},
	{
		text: "Compare opportunities across metrics",
		img: "/assets/about/compare.jpg",
	},
	{
		text: "Online Customer success manager",
		img: "/assets/about/customer.jpg",
	},
	{
		text: "Track project and handover status in-app",
		img: "/assets/about/proj-manage.jpg",
	},
	{
		text: "Track real-time market pulse on Marrfa",
		img: "/assets/about/market.jpg"
	},
];

const AboutSection = () => {
	const { innerWidth } = window;

	return (
		<section className="about-section">
			<div className="cards">
				{aboutPoints.map((item, i) => (
					<div className="card" key={i}>
						<img src={item.img} alt="" />
						<div className="text">{item.text}</div>
					</div>
				))}
			</div>
			<Heading
				heading="Marrfa brings cross-border real estate investment
						opportunities to your fingertips"
				color={"var(--cyan)"}
				align="left"
				style={{
					width: innerWidth > 720 ? '70%' : '100%',
				}}
			></Heading>
		</section>
	);
}
 
export default AboutSection;