import React from "react";
import "./ProjectCard-v2.css";

import {
	WalletFilled,
	FormatPainterFilled,
	EnvironmentFilled,
	PhoneOutlined,
	WhatsAppOutlined,
} from "@ant-design/icons";

import Whatsapp from "/assets/icons/whatsapp.svg";
import CustomButton from "../button/CustomButton";
import { Button } from "antd";

export const Label = ({ label, value }) => {
	return (
		<div className="row">
			<div className="brandicon">
				<WalletFilled style={{ fontSize: "20px" }} />
			</div>
			<div className="data-part">
				<div className="label">{label}:</div>
				<div className="value">
					{value.toLocaleString().toUpperCase()}
				</div>
			</div>
		</div>
	);
};

export const Location = ({ text }) => {
	return (
		<div className="location">
			<EnvironmentFilled style={{ color: "var(--grey-text)" }} />
			<div className="text">{text}</div>
		</div>
	);
};

export const ButtonGroup = () => {
	return (
		<div className="base-section">
			<CustomButton
				startIcon={<PhoneOutlined />}
				fullWidth
				text={"Call"}
			/>
			<CustomButton
				startIcon={<WhatsAppOutlined />}
				fullWidth
				text={"Whatsapp"}
			/>
		</div>
	);
};

const Project = ({ data }) => {
	return (
		<div className="project-card2">
			<div className="image-section">
				<img src={data.images.heroImg} alt="" />
				<div className="image-tag">Residential</div>
				<div className="marrfex-tag">4.5</div>
				<div className="heading">
					<div className="price">AED 20,00,000</div>
					<div className="project-name">{data.name}</div>
					<div className="location">Downtown, Dubai</div>

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
