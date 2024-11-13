import React, { useState, useEffect } from "react";
import "./People.css";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const members = [
	<AvatarCard
		name={"Jamil Ahmad"}
		designation={"Founder & CEO"}
		dp={"/assets/people/jamil.jpg"}
		description={"Ex-Co-Founder Fashinza"}
		key={1}
	/>,
	<AvatarCard
		name={"Mallika Boobna"}
		designation={
			"Brand Marketing strategist & Investment Country Director- Singapore"
		}
		dp={"/assets/people/malika.jpg"}
		description={"5 years of building brands"}
		key={2}
	/>,
	<AvatarCard
		name={"Ross S"}
		designation={"Director - Investments"}
		dp={"/assets/people/ross.jpg"}
		key={3}
		description={"7 years of Real Estate Experience"}
	/>,
	<AvatarCard
		name={"Artem Gede"}
		designation={"Investment Manager, EU"}
		dp={"/assets/people/artem.jpg"}
		key={4}
		description={"4 years of EU Real Estate Expereince"}
	/>,
	<AvatarCard
		name={"Abdul Latif"}
		designation={"Associate Director"}
		dp={"/assets/people/abdul.jpg"}
		key={4}
		description={"18 years of real estate experience"}
	/>,
	<AvatarCard
		name={"Nabil Peerally"}
		designation={"Investment Country Director- Mauritius"}
		dp={"/assets/people/nabil.jpg"}
		key={4}
		description={"5 years of experience"}
	/>,
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
					
					item
				))}
			</section>
		</div>
	);
};

export default PeoplePage;
