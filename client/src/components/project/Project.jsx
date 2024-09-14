import React from "react";
import "./Project.css";

import Whatsapp from "/assets/icons/whatsapp.svg"

export const Label = ({ label, value }) => {
    return (
        <div className="row">
            <div className="label">{label}:</div>
            <div className="value">{value.toLocaleString()}</div>
        </div>
    );
};

export const Location = ({text}) => {
    return (
        <div className="location">
            <i className="material-icons" style={{ fontSize: "15px", color: "var(--blue)" }}>
                location_on
            </i>
            <div className="text">{text}</div>
        </div>
    );
};

export const BaseButton = ({start, complete, quarter}) => {
    return (
        <div className="base-section">
            <div className="base-button">
                <div className="label">start price from</div>
                <div className="value">{`AED ${start.toLocaleString()}`}</div>
            </div>
            <div className="base-button">
                <div className="label">completion date</div>
                <div className="value">{`Q${quarter} ${complete}`}</div>
            </div>
        </div>
    );
};

const Project = ({data}) => {
    return (
        <div className="project">
            <div 
                className="image-section"
                style = {{
                    background: `url("${data.images.heroImg}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}

            >
                <div className="image-tag">Developer</div>
                <i className="material-icons">location_on</i>
            </div>
            <div className="info-section">
                <button className="icon">
                    <img src={Whatsapp} />
                </button>
                <button className="icon material-icons">forum</button>
                <div className="heading">
                    <div className="project-name">{data.name}</div>
                    <div className="rating gradient-text">4.4</div>
                </div>
                <div className="stats">
                    <Label label={"Area"} value={`${data.layout.size.value} ${data.layout.size.unit}`} />
                    <Label label={"Yield"} value={45200} />
                    <Label label={"Property type"} value={data.type} />
                </div>
                <Location text = {`${data.location.state}, ${data.location.country}`} />
            </div>
            <BaseButton start = {12300} complete={2024} quarter={3} />
        </div>
    );
};

export default Project;
