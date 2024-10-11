import React from "react";
import Tag from "../tag/Tag";
import "./ProjectDesc.css";
import { Link } from "react-router-dom";
// const nm = "Name of the project";
// const tags = ["amazing", "beachview", "free", "transport", "etc"];
// const image = "/assets/projects/projectbanner.png"

const ProjectDesc = ({ property }) => {
	return (
		<div className="project-desc">
			<div className="banner">
				<img src={property.images.heroImg} alt="project-image" />
			</div>
			<div className="info">
				<div className="pname">
					<Link to={"/property/" + property._id}>
						{property.name}
					</Link>
				</div>
				<div className="location">
					{property.location.address +
						", " +
						property.location.city +
						", " +
						property.location.state +
						", " +
						property.location.country}
				</div>
				<div className="highlights-list">
					{/* {property.features.amenities.map((val, i) => {
						return <Tag text={val} key={i} />;
					})} */}
					<Tag text={property.occupancy} />
					<Tag text={property.type} />
				</div>
			</div>
		</div>
	);
};

export default ProjectDesc;
