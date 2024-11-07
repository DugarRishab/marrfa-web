import React from "react";
import "./ProjectDeal.css";
import { Label, Location, BaseButton } from "../projectcard/ProjectCard";
import Tag from "../tag/Tag";
import CustomButton from "../button/CustomButton";

const ProjectDeal = () => {
    return (
        <div className="deal-card">
            <div className="info-section">
                <div className="deal-head">Deal of the month</div>
                <div className="heading">
                    <div className="project-name">Big name</div>
                    <div className="rating gradient-text">4.4</div>
                </div>
                <div className="stats">
                    <Label label={"Area"} value={45200} />
                    <Label label={"Project yield"} value={45200} />
                    <Label label={"Start from"} value={45200} />
                    <Label label={"Completion date"} value={45200} />
                </div>
                <Location text={"Kolkata, India"} />
                <div className="highlights">
                    <div className="heading">Highlights</div>
                    <div className="taglist">
                        <Tag text={"Lowest Price"} />
                        <Tag text={"Customer favourite"} />
                        <Tag text={"2-BHK"} />
                        <Tag text={"Attached Pool"} />
                        <Tag text={"Gym Facility"} />
                        <Tag text={"tag 1"} />
                        <Tag text={"tag 1"} />
                    </div>
                </div>
                {/* <BaseButton start = {12300} complete={2024} quarter={3} /> */}
                <CustomButton fullWidth text={"Invest Now!"} />
            </div>
            <img src="/assets/projects/balloon.webp" />
        </div>
    );
};

export default ProjectDeal;
