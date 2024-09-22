import React from "react";
import Tag from "../tag/Tag";
import "./ProjectDesc.css";
// const nm = "Name of the project";
// const tags = ["amazing", "beachview", "free", "transport", "etc"];
// const image = "/assets/projects/projectbanner.png"

const ProjectDesc = ({projectName, highlights, image}) => {
    return (
        <div className="project-desc">
            <div className="banner">
                <img src={image} alt="project-image" />
            </div>
            <div className="info">
                <div className="pname">{projectName}</div>
                <div style={{fontWeight: 400, fontSize: "0.9rem"}}>Highlights</div>
                <div className="highlights-list">
                    {highlights.map((val, i) => {
                        return <Tag text={val} key={i} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectDesc;
