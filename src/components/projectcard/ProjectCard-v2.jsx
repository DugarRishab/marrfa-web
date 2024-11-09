import React from "react";
import "./ProjectCard-v2.css";
import { Link } from "react-router-dom";

const Project = ({ data }) => {
	// console.log(data);
	return (
		<div className="project-card2">
			<div className="image-section">
				<img src={data.images.heroImg} alt="" />
				<div className="image-tag">{ data.type}</div>
				<div className="marrfex-tag">4.5</div>
				<div className="heading">
					<div className="price">{ data.price.unit +" "+ data.price.value}</div>
					<div className="project-name">
						{" "}
						<Link to={"/property/" + data._id}>
							{data.name}
						</Link>{" "}
					</div>
					<div className="location">
						{data.location.city}, {data.location.country}
					</div>

					<div className="base">
						<div className="item">
							<div className="icon">
								<span className="material-symbols-outlined">
									pageless
								</span>
							</div>
							<div className="value">
								{data.layout.size.value +
									" " +
									data.layout.size.unit}
							</div>
						</div>
						<div className="item">
							<div className="icon">
								<span className="material-symbols-outlined">
									event
								</span>
							</div>
							<div className="value">{"NA"}</div>
						</div>
						<div className="item">
							<div className="icon">
								<span className="material-symbols-outlined">
									pageless
								</span>
							</div>
							<div className="value">
								{data.metadata.completionDate || "NA"}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
