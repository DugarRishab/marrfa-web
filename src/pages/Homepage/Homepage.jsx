import React from "react";
import "./Homepage.css";

import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";
import ProjectCard from "../../components/projectcard/ProjectCard";
import CustomCarousel from "../../components/carousel/Carousel";
import Search from "../../components/search/Search";
import News from "../../components/news/News";
import ProjectDeal from "../../components/projectdeal/ProjectDeal";
import Story from "../../components/story/Story";
import { SearchOutlined, LineChartOutlined, CarryOutOutlined, TeamOutlined, BarChartOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

import projectData from "../../assets/data/projects.json";
import Mobcarousel from "../../components/mobile-carousel/Mobcarousel";
import SearchBox from "../../components/SearchBox/SearchBox";
import Heading from "../../components/Heading/Heading";
// import 'antd/dist/antd.css';
export const ProjectList = [];
export const StoryList = [];
export const NewsList = [];

const contentStyle = {
    width: 100,
    height: 100,
    background: "green",
};

for (let p of projectData) {
    ProjectList.push(<ProjectCard data={p} />);
    StoryList.push(<Story data={p} />);
    NewsList.push(<News data={p} />);
}

const Homepage = () => {

    const { innerWidth } = window;

    return (
		<div className="homepage">
			<section className="banner">
				<div className="text">
					Unlock Global Real Estate Wealth with AI-Powered Insights
				</div>
				{/* <Search /> */}
				<SearchBox></SearchBox>
			</section>
			<section className="projects">
				<Heading
					heading="Explore our Trending Projects"
					sub="Lorem Ipsum doler sith"
				></Heading>

				{innerWidth > 630 ? (
					<CustomCarousel items={ProjectList} />
				) : (
					<Mobcarousel items={ProjectList} width={"--card-width"} />
				)}
			</section>
			{innerWidth > 1000 ? (
				<div className="project-deal">
					<ProjectDeal />
				</div>
			) : (
				<div className="project-deal">
					{/* <div className="heading">Deal of the Month</div> */}
					<Heading
						heading="Deal of the Month"
						sub="Lorem Ipsum doler sith"
					></Heading>
					{ProjectList[0]}
				</div>
			)}

			<section className="about-section">
				<div className="about">
					{/* <div className="heading">
						Marrfa brings cross-border real estate investment
						opportunities to your fingertips
					</div> */}
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
						text={"Enquire about Project and Details"}
					/>
				</div>
				<img src="/assets/marrfa-clipart.png" />
			</section>
			<section className="story-wrapper">
				<Heading
					heading="Stories where Marrfa turned vision into success"
					sub="Lorem Ipsum doler sith"
				></Heading>
				<Mobcarousel items={StoryList} width={"--story-width"} />
				{innerWidth <= 720 && (
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
				)}
			</section>
			<section className="news-wrapper">
				
				<Heading
					heading="Be updated with latest news and articles"
					sub="Lorem Ipsum doler sith"
				></Heading>
				{innerWidth > 630 ? (
					<CustomCarousel items={NewsList} />
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
