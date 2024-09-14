import React from "react";
import "./Projects.css";
import Search from "../../components/search/Search";
import Carousel from "../../components/carousel/Carousel";

import { ProjectList } from "../Homepage/Homepage";
import PropertyRequestForm from "../../components/PropertyRequestForm/PropertyRequestForm";
import CustomButton from "../../components/button/CustomButton";

const Projects = () => {
    return (
        <div className="projects">
            <section className="banner">
                <Search />
            </section>
            <section className="sale-wrapper">
                <div className="headline">
                    <div className="heading">Properties for sale in Dubai</div>
                    <CustomButton startIcon={<i className="material-icons">notifications</i>} text={"Subscribe to notifications"} />
                </div>
            </section>
            <section className="choice-wrapper">
                <div className="heading">Marrfa's Choice</div>
                <Carousel items={ProjectList} />
            </section>
            <section className="request-wrapper">
                <PropertyRequestForm />
            </section>
        </div>
    );
};

export default Projects;
