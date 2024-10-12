import React, { useState, useEffect } from 'react';
import "./TrendingProjects.css";

import ProjectCard from "../../components/projectcard/ProjectCard-v2";
import projectData from "../../assets/data/projects.json";
import Heading from "../../components/Heading/Heading";
import Carousel from "../../components/carousel/Carousel";

export const ProjectList = [];
for (let p of projectData) {
	ProjectList.push(<ProjectCard data={p} />);
}

const TrendingProjectsSection = () => {
	return (
		<section className="trending-projects-section">
			<Heading
				heading="Explore our Trending Projects"
				sub="Lorem Ipsum doler sith"
				align='center'
				color='white'
			></Heading>

			<Carousel items={ProjectList} />
		</section>
	);
}
 
export default TrendingProjectsSection;