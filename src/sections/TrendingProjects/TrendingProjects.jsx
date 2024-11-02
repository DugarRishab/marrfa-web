import React, { useState, useEffect } from 'react';
import "./TrendingProjects.css";

import ProjectCard from "../../components/projectcard/ProjectCard-v2";
import projectData from "../../assets/data/projects.json";
import Heading from "../../components/Heading/Heading";
import Mobcarousel from "../../components/MobCarousel/Mobcarousel";
import { message } from "antd";
import { searchProperties, viewProperties } from "../../services/api";

// export const ProjectList = [];
// for (let p of projectData) {
// 	ProjectList.push(<ProjectCard data={p} />);
// }

const TrendingProjectsSection = () => {
	const ProjectList = [];

	const [projects, setProjects] = useState([]);

	for (let p of projects) {
		ProjectList.push(<ProjectCard data={p} />);
	}

	const getData = async () => {
		try {
			const res = await viewProperties();
			setProjects(res.data.data.properties);
			console.log(res.data.data);
		} catch (err) {
			console.log(err);
			message.error(
				err.message || err.response.data.message || err.message
			);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className="trending-projects-section">
			<Heading
				heading="Explore our Trending Projects"
				sub="UAE Projects in High Demand"
				align="center"
				color="white"
			></Heading>

			<Mobcarousel items={ProjectList} />
		</section>
	);
};
 
export default TrendingProjectsSection;