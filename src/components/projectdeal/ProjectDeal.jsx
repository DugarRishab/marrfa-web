import React, {useState, useEffect} from "react";
import "./ProjectDeal.css";
import { Label, Location, BaseButton } from "../projectcard/ProjectCard";
import Tag from "../tag/Tag";
import CustomButton from "../button/CustomButton";
import CallbackRequestForm from "../CallbackRequestForm/CallbackRequestForm";
import { Button, Drawer, Dropdown, Modal } from "antd";
// import { Tag } from "antd";

const ProjectDeal = () => {

    const [openRequestBox, setOpenRequestBox] = useState(false);

    return (
		<div className="deal-card">
			<div className="info-section">
				<div className="deal-head">Deal of the month</div>
				<div className="heading">
					<div className="project-name">Luxiorous Villa in LA</div>
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
						<Tag version={2} text={"Lowest Price"}></Tag>
						<Tag version={2} text={"Customer favourite"} />
						<Tag version={2} text={"2-BHK"} />
						<Tag version={2} text={"Attached Pool"} />
						<Tag version={2} text={"Gym Facility"} />
					</div>
				</div>
				{/* <BaseButton start = {12300} complete={2024} quarter={3} /> */}
				<CustomButton
					fullWidth
					text={"Invest Now!"}
					onClick={() => setOpenRequestBox(true)}
				/>
			</div>
			<div className="img">
				<img src="/assets/balloon.webp" />
				<div className="content">
					<div className="rating">4.4</div>
				</div>
			</div>
			
			<CallbackRequestForm
				open={openRequestBox}
				onCancel={() => setOpenRequestBox(false)}
			></CallbackRequestForm>
		</div>
	);
};

export default ProjectDeal;
