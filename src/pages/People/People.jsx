import React, { useState, useEffect } from "react";
import "./People.css";

import ReviewCard from "../../components/ReviewCard/ReviewCard";
const members = [
	{
		name: "Rishab dugar",
		tagline: "Lorem Ipsum",
		text: "Our philosophy is simple; provide expert guidance and, helping clients make informed and profitablereal estate investments.",
	},
	{
		name: "Rishab dugar",
		tagline: "Lorem Ipsum",
		text: "Our philosophy is simple; provide expert guidance and, helping clients make informed and profitablereal estate investments.",
	},
	{
		name: "Rishab dugar",
		tagline: "Lorem Ipsum",
		text: "Our philosophy is simple; provide expert guidance and, helping clients make informed and profitablereal estate investments.",
	},
];

const PeoplePage = () => {
	return (
		<div className="people-page">
			<section className="section-1">
				<div className="bg">
					<img src="./assets/people/people-bg.png" alt="" />
				</div>
				<div className="content">
					<div className="heading">
						Together, we bring diverse expertise and dedication to
						create value and success for our clients
					</div>
					<div className="sub-heading">
						Our philosophy is simple; provide expert guidance and
						insights, helping clients make informed and profitable
						real estate investments.
					</div>
				</div>
			</section>
			<section className="section-2">
				{members.map((item, id) => (
					<div
						className={
							"review-wrapper " + ((id % 2) != 0 ? "right" : "")
						}
						key={id}
					>
						<ReviewCard
							name={item.name}
							tagline={item.tagline}
							text={item.text}
						></ReviewCard>
					</div>
				))}
			</section>
		</div>
	);
};

export default PeoplePage;
