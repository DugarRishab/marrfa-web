import React from "react";
import "./Homepage.css";

import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";
import ProjectCard from "../../components/projectcard/ProjectCard-v2";
import Search from "../../components/search/Search";
import News from "../../components/news/News";
import ProjectDeal from "../../components/projectdeal/ProjectDeal";
import StoryCard from "../../components/StoryCard/StoryCard";
import projectData from "../../assets/data/projects.json";
import storyData from "../../assets/data/stories.json";
import Mobcarousel from "../../components/MobCarousel/Mobcarousel";
import SearchBox from "../../components/SearchBox/SearchBox";
import Heading from "../../components/Heading/Heading";
import AboutSection from "../../sections/AboutSection/AboutSection";
import TrendingProjectsSection from "../../sections/TrendingProjects/TrendingProjects";
import StorySection from "../../sections/StorySection/StorySection";
import {
	SearchOutlined,
	LineChartOutlined,
	CarryOutOutlined,
	TeamOutlined,
	BarChartOutlined,
} from "@ant-design/icons";
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
					src="/assets/banner/HomeBanner2.jpg"
					alt=""
				/>
				{/* <div className="banner-img-gradient"></div> */}
				<div className="text">
					Invest in Top Real Estate Projects around the World
				</div>

				<SearchBox></SearchBox>
			</section>
			{/* <AboutSection></AboutSection> */}

			<TrendingProjectsSection></TrendingProjectsSection>
			{/* <br /> */}
			{innerWidth > 1000 ? (
				<div className="project-deal">
					<ProjectDeal />
				</div>
			) : (
				<div className="project-deal">
					{/* <div className="heading">Deal of the Month</div> */}
					<Heading
						heading="Deal of the Month"
						// sub="Lorem Ipsum doler sith"
					></Heading>
					{ProjectList[0]}
				</div>
			)}
			<section className="about-section">
				<div className="about">
					<Heading
						heading="Marrfa brings cross-border real estate investment
						opportunities to your fingertips"
						color={"var(--blue)"}
						align="left"
						// sub="Lorem Ipsum doler sith"
					></Heading>
					<div className="bullets">
						<div className="vertical-bar"></div>
						<div className="bullet-icon">
							<div className="bullet">
								<SearchOutlined />
							</div>
						</div>
						<div className="point">
							{" "}
							Real-time view of available investment opportunities
						</div>
						<div className="bullet-icon">
							<div className="bullet">
								<BarChartOutlined />
							</div>
						</div>
						<div className="point">
							{" "}
							Compare opportunities across metrics
						</div>
						<div className="bullet-icon">
							<div className="bullet">
								<TeamOutlined />
							</div>
						</div>
						<div className="point">
							{" "}
							Online Customer success manager
						</div>
						<div className="bullet-icon">
							<div className="bullet">
								<LineChartOutlined />
							</div>
						</div>
						<div className="point">
							Track project and handover status in-app
						</div>
						<div className="bullet-icon">
							<div className="bullet">
								<CarryOutOutlined />
							</div>
						</div>
						<div className="point">
							Track real-time market pulse on Marrfa
						</div>
					</div>
					<CustomButton
						style={{ padding: "10px 30px" }}
						text={"Enquire about Projects"}
					/>
				</div>
				<img src="/assets/marrfa-clipart.png" />
			</section>

			<StorySection></StorySection>
			<section className="news-wrapper">
				<Heading
					heading="Be updated with latest news and articles"
					sub=""
					color="black"
				></Heading>
				{innerWidth > 630 ? (
					<Mobcarousel items={NewsList} />
				) : (
					<div className="expanded-news">
						{NewsList.slice(0, 3).map((v) => v)}
						<CustomButton text={"Read all"} fullWidth />
					</div>
				)}
			</section>
		</div>
	);
};

export default Homepage;
