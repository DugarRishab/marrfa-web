import React from "react";
import "./Projects.css";
import Search from "../../components/search/Search";
import Carousel from "../../components/carousel/Carousel";

import { ProjectList } from "../Homepage/Homepage";

const Projects = () => {
    return (
        <div className="projects">
            <section className="banner">
                <Search />
            </section>
            <section className="sale-wrapper"></section>
            <section className="choice-wrapper">
                <div className="heading">Marrfa's Choice</div>
                <Carousel items={ProjectList} />
            </section>
            <section className="request-wrapper"></section>
        </div>
    );
};

export default Projects;
