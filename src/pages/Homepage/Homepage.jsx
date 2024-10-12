import React from "react";
import "./Homepage.css";

import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";
import ProjectCard from "../../components/projectcard/ProjectCard-v2";
import Carousel from "../../components/carousel/Carousel";
import Search from "../../components/search/Search";
import News from "../../components/news/News";
import ProjectDeal from "../../components/projectdeal/ProjectDeal";
import StoryCard from "../../components/StoryCard/StoryCard";
import projectData from "../../assets/data/projects.json";
import storyData from "../../assets/data/stories.json";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";
import SearchBox from "../../components/SearchBox/SearchBox";
import Heading from "../../components/Heading/Heading";
import AboutSection from "../../sections/AboutSection/AboutSection";
import TrendingProjectsSection from "../../sections/TrendingProjects/TrendingProjects";
import StorySection from "../../sections/StorySection/StorySection";
// import 'antd/dist/antd.css';
const ProjectList = [];
const StoryList = [];
const NewsList = [];
for (let p of projectData) {
	ProjectList.push(<ProjectCard data={p} />);
	NewsList.push(<News data={p} />);
}

for (let s of storyData) {
	StoryList.push(<StoryCard data={s} />);
}
const Homepage = () => {
	const { innerWidth } = window;

	return (
		<div className="homepage">
			<section className="banner">
				<img
					className="banner-img"
					src="/assets/banner/homeBanner3.jpg"
					alt=""
				/>
				<div className="banner-img-gradient"></div>
				<div className="text">
					Unlock Global Real Estate Wealth with AI-Powered Insights
				</div>
				{/* <Search /> */}
				<SearchBox></SearchBox>
			</section>
			<AboutSection></AboutSection>

			<TrendingProjectsSection></TrendingProjectsSection>
			<br />

			
			<StorySection></StorySection>
			{/* <section className="news-wrapper">
				<Heading
					heading="Be updated with latest news and articles"
					sub="Lorem Ipsum doler sith"
				></Heading>
				{innerWidth > 630 ? (
					<Carousel items={NewsList} />
				) : (
					<div className="expanded-news">
						{NewsList.slice(0, 3).map((v) => v)}
						<CustomButton text={"Read all"} fullWidth />
					</div>
				)}
			</section> */}
		</div>
	);
};

export default Homepage;
