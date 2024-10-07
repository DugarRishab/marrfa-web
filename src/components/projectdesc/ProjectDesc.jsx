import React from "react";
import Tag from "../tag/Tag";
import "./ProjectDesc.css";
import { Link } from "react-router-dom";
// const nm = "Name of the project";
// const tags = ["amazing", "beachview", "free", "transport", "etc"];
// const image = "/assets/projects/projectbanner.png"

const ProjectDesc = ({ projectName, highlights, image, location }) => {
	return (
		<div className="project-desc">
			<div className="banner">
				<img src={image} alt="project-image" />
			</div>
			<div className="info">
				<div className="pname">
					<Link to="/property">{projectName}</Link>
				</div>
				<div className="location">
					{location}
				</div>
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
