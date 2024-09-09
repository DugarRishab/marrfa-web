import React from "react";
import "./Homepage.css";

import CustomButton from "../../components/button/CustomButton";
import Tag from "../../components/tag/Tag";
import Project from "../../components/project/Project";
import Carousel from "../../components/carousel/Carousel";
import Search from "../../components/search/Search";
import News from "../../components/news/News";
import ProjectDeal from "../../components/projectdeal/ProjectDeal";
import Story from "../../components/story/Story";

import projectData from "../../assets/data/projects.json"

export const ProjectList = [];
export const StoryList = [];
export const NewsList = [];

for(let p of projectData){
    ProjectList.push(
        <Project 
            data={p}
        />
    )
    StoryList.push(
        <Story data={p} />
    )
    NewsList.push(
        <News data = {p} />
    )
}

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="banner">
                <div className="text">Unlock Global Real Estate Wealth with AI-Powered Insights</div>
                <Search />
            </div>
            <div className="projects">
                <div className="heading">Trending Projects</div>
                <Carousel items={ProjectList} />
            </div>
            <div className="project-deal">
                <ProjectDeal />
            </div>

            <div className="about-section">
                <div className="about">
                    <div className="heading">
                        Marrfa brings cross-border real estate investment opportunities to your fingertips
                    </div>
                    <div className="bullets">
                        <div className="vertical-bar"></div>
                        <div className="bullet-icon"><i className="material-icons">add</i></div>
                        <div className="point"> Real-time view of available investment opportunities</div>
                        <div className="bullet-icon"><i className="material-icons">add</i></div>
                        <div className="point"> Compare opportunities across metrics</div>
                        <div className="bullet-icon"><i className="material-icons">add</i></div>
                        <div className="point"> Online Customer success manager</div>
                        <div className="bullet-icon"><i className="material-icons">add</i></div>
                        <div className="point">Track project and handover status in-app</div>
                        <div className="bullet-icon"><i className="material-icons">add</i></div>
                        <div className="point">Track real-time market pulse on Marrfa</div>
                    </div>
                    <CustomButton style = {{padding: "10px 30px"}} text={"Enquire about Project and Details"} />
                </div>
                <img src="/assets/marrfa-clipart.png" />
            </div>
            <div className="story-wrapper">
                <div className="heading">Marrfa's Success Stories</div>
                <Carousel indicator items={StoryList} />
            </div>
            <div className="news-wrapper">
                <div className="heading">News and Articles</div>
                <Carousel items={NewsList} />
            </div>
        </div>
    );
};

export default Homepage;
